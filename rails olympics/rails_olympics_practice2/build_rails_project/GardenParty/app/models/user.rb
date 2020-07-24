# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# User
#   should validate that :username cannot be empty/falsy (FAILED - 18)
#   should validate that :username is case-sensitively unique (FAILED - 19)
#   should have many gardens class_name => Garden (FAILED - 20)
#   should have many flowers class_name => Flower (FAILED - 21)
#   should have many flowers_in_all_gardens through gardens source => flowers (FAILED - 22)
#   should have many gardens_with_my_flowers through flowers source => garden (FAILED - 23)


class User < ApplicationRecord
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
