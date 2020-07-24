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
require 'test_helper'

class BlogTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
