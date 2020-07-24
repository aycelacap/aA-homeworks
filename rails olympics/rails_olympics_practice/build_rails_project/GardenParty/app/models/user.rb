# == Schema Information
#
# Table name: users
#
#  id       :bigint           not null, primary key
#  username :string           not null
#
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
