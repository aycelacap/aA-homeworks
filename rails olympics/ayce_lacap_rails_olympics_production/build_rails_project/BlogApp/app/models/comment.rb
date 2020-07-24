# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string
#  author_id  :integer
#  blog_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
#     Comment
#   should validate that :body cannot be empty/falsy (FAILED - 12)
#   should belong to author class_name => User required: true (FAILED - 13)
#   should belong to blog class_name => Blog required: true (FAILED - 14)

    validates :body, presence: true
    
    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id,
        required: true

    belongs_to :blog,
        class_name: :Blog,
        foreign_key: :blog_id,
        required: true

end
