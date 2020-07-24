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
class Flower < ApplicationRecord
#     Flower
#   should validate that :flower_type cannot be empty/falsy (FAILED - 10)
#   should belong to gardener class_name => User required: true (FAILED - 11)
#   should belong to garden class_name => Garden required: true (FAILED - 12)

    validates :flower_type, presence: true

    belongs_to :gardener,
        class_name: :User,
        foreign_key: :gardener_id

    belongs_to :garden,
        class_name: :Garden,
        foreign_key: :garden_id
        
end
