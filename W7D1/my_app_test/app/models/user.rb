# class User < ApplicationRecord
#     validates :username, presence: true
#     validates :session_token, presence: true, uniqueness: true
#     validates :password_digest, error: {message: "Password can't be blank"}
#     validates :password, length: {minimum: 6, allow_nil: true}
#     before_validation :ensure_session_token

#     def self.find_by_credentials(username, password) #breakfast, $2a$10$oO6LUi.ikUl7rloGcZ.NFeURc0pNQhQA9MTaB89XX/kDNm.3vQVVu"
#         user = User.find_by(username: username)
#         # the password we take in is hashified
#         # user.password_digest takes in the users .password_digest hashifies the users password

#         # u.password_digest = BCrypt::Password.create('i_love_breakfast')
#         # => "$2a$10$oO6LUi.ikUl7rloGcZ.NFeURc0pNQhQA9MTaB89XX/kDNm.3vQVVu"

#         # we'll call .new to the hashified password and set it against the password itself

#         return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
#         nil
#     end

#     def self.generate_session_token
#         # we want to return a 16 char long pseudorandom string 
#         SecureRandom::urlsafe_base64(16)
#     end

#     def reset_session_token
#         self.session_token = User.generate_session_token
#         self.save!
#         self.session_token
#     end

#     def ensure_session_token
#         self.session_token ||= User.generate_session_token
#     end

#     def password=(password)
#         @password = password
#         self.password_digest = BCrypt::Password.create(password)
#     end

# end

