# == Schema Information
#
# Table name: gardens
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  size            :integer          not null
#  garden_owner_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Garden < ApplicationRecord
#     Garden
#   should validate that :name cannot be empty/falsy (FAILED - 10)
#   should validate that :name is case-sensitively unique within the scope of :garden_owner_id (FAILED - 11)
#   should validate that :size cannot be empty/falsy (FAILED - 12)
#   should belong to garden_owner class_name => User required: true (FAILED - 13)
#   should have many flowers class_name => Flower (FAILED - 14)

    validates :name, presence: true, uniqueness: { scope: :garden_owner_id }
    validates :size, presence: true

    belongs_to :garden_owner,
        class_name: :User,
        foreign_key: :garden_owner_id

    has_many :flowers,
        class_name: :Flower,
        foreign_key: :garden_id

end
