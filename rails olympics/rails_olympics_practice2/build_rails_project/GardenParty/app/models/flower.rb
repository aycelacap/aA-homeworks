# == Schema Information
#
# Table name: flowers
#
#  id          :bigint           not null, primary key
#  flower_type :string           not null
#  gardener_id :integer          not null
#  garden_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Flower < ApplicationRecord
    validates :flower_type, presence: true

    belongs_to :gardener,
        class_name: :User,
        foreign_key: :gardener_id

    belongs_to :garden,
        class_name: :Garden,
        foreign_key: :garden_id
end
