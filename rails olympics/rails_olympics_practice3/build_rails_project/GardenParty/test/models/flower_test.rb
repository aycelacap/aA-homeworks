# == Schema Information
#
# Table name: flowers
#
#  id          :bigint           not null, primary key
#  flower_type :string
#  gardener_id :integer
#  garden_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class FlowerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
