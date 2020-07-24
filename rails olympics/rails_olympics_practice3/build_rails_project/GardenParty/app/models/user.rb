# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
#     User
#   should validate that :username cannot be empty/falsy (FAILED - 10)
#   should validate that :username is case-sensitively unique (FAILED - 11)
#   should have many gardens class_name => Garden (FAILED - 12)
#   should have many flowers class_name => Flower (FAILED - 13)
#   should have many flowers_in_all_gardens through gardens source => flowers (FAILED - 14)
#   should have many gardens_with_my_flowers through flowers source => garden (FAILED - 15)

    validates :username, presence: true, uniqueness: true

    has_many :gardens,
        class_name: :Garden,
        foreign_key: :garden_owner_id

    has_many :flowers,
        class_name: :Flower,
        foreign_key: :gardener_id

    has_many :flowers_in_all_gardens,
        through: :gardens,
        source: :flowers

    has_many :gardens_with_my_flowers,
        through: :flowers,
        source: :garden

end
