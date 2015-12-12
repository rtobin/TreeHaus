INVALID_PASSWORD =<<-PSSWRD
must be at least 6 characters, no more than 16 characters,
and must include at least one upper case letter, one lower case letter,
and one numeric digit.
PSSWRD

class User < ActiveRecord::Base
  attr_reader :password
  after_initialize :ensure_session_token

  validates(
    :email,
    :session_token,
    uniqueness: true
  )

  validates(
    # :name,
    :email,
    # :organization_id,
    # :title,
    :password_digest,
    :session_token,
    presence: true
  )

  has_attached_file :avatar, default_url: "no_avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  validate :valid_password_given, if: -> { password }

  has_many :memberships, foreign_key: :member_id, class_name: "Membership"
  has_many :projects, through: :memberships, source: :project
  has_many :authored_projects, foreign_key: :author_id


  has_many :assigned_steps, foreign_key: :assignee_id, class_name: "StepAssignment"

  has_many :authored_todos, foreign_key: :author_id, class_name: "Todo"
  has_many :authored_steps, foreign_key: :author_id, class_name: "Step"

  has_many :teams, through: :memberships, source: :team
  has_many :records # record for a user action that invoked the creation of a record
  has_many :notifications #records that are meant to notify user

  def assigned_todos
    # Todo.includes(:step_assignments)
    #     .where(step_assignments: { user_id: self.id })
    #     .distinct
    []
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_unique_session_token
    token = SecureRandom.base64(16)

    while self.class.exists?(session_token: token)
      token = SecureRandom.base64(16)
    end

    token
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def valid_password_given
    unless password =~ /\A(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}\z/
      errors[:password] << INVALID_PASSWORD
    end
  end

  def to_builder
    Jbuilder.new do |user|
      user.email self.email
      # user.projects json.array! @projects, :id, :title
    end
  end
end
