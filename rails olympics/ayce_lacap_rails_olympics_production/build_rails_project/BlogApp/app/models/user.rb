# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
#     User
#   should validate that :email cannot be empty/falsy (FAILED - 12)
#   should validate that :email is case-sensitively unique (FAILED - 13)
#   should have many blogs class_name => Blog (FAILED - 14)
#   should have many comments class_name => Comment (FAILED - 15)
#   should have many comments_on_blogs through blogs source => comments (FAILED - 16)
#   should have many blogs_commented_on through comments source => blog (FAILED - 17)


    validates :email, presence: true, uniqueness: true

    has_many :blogs,
        class_name: :Blog,
        foreign_key: :author_id

    has_many :comments,
        class_name: :Comment,
        foreign_key: :author_id

    has_many :comments_on_blogs,
        through: :blogs,
        source: :comments

    has_many :blogs_commented_on,
        through: :comments,
        source: :blog
end
