# == Schema Information
#
# Table name: gardens
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  size            :integer          not null
#  garden_owner_id :integer          not null
#
class Garden < ApplicationRecord
    validates :name, presence: true, uniqueness: {scope: :garden_owner_id}
    validates :size, presence: true

    belongs_to :garden_owner,
        class_name: :User,
        foreign_key: :garden_owner_id

    has_many :flowers,
        class_name: :Flower
    
    
end
