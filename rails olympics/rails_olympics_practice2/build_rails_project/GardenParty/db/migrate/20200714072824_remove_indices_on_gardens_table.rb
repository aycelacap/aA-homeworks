class RemoveIndicesOnGardensTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :gardens, :name
    remove_index :gardens, :garden_owner_id
  end
end
