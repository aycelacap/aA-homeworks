# == Schema Information
#
# Table name: blogs
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :text
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# Blog
#   should validate that :title cannot be empty/falsy (FAILED - 12)
#   should validate that :body cannot be empty/falsy (FAILED - 13)
#   should validate that :title is case-sensitively unique within the scope of :author_id (FAILED - 14)
#   should belong to author class_name => User required: true (FAILED - 15)
#   should have many comments class_name => Comment dependent => destroy (FAILED - 16)
class Blog < ApplicationRecord

    validates :title, :body, presence: true
    validates :title, uniqueness: { scope: :author_id }


    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id,
        required: true

    has_many :comments,
        class_name: :Comment,
        foreign_key: :author_id,
        dependent: :destroy
end
