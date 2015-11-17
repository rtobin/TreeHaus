INVALID_PASSWORD =<<-PSSWRD
must be at least 6 characters, no more than 16 characters,
and must include at least one upper case letter, one lower case letter,
and one numeric digit.
PSSWRD

class User < ActiveRecord::Base
  after_initialize :ensure_session_token

  validates(
    :email,
    :session_token,
    uniqueness: true
  )

  validates(
    :name,
    :email,
    :organization_name,
    :title,
    :activation_token,
    :password_digest,
    :session_token,
    presence: true
  )

  validate :valid_password_given, if: -> { password }

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)

    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password).to_s
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
end