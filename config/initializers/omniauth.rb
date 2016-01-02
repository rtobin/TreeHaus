Rails.application.config.middleware.use OmniAuth::Builder do
  OmniAuth.config.full_host = Rails.env.production? ? 'https://treehaus.space' : 'http://localhost:3000'
  provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_SECRET"],
    {
      :name => "google",
      :scope => "email, profile, plus.me, http://gdata.youtube.com",
      :prompt => "select_account",
      :image_aspect_ratio => "square",
      :image_size => 50
    }
end
