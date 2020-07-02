class AddHouseIdToPerson < ActiveRecord::Migration[6.0]
  def change
    # bundle exec rails g migration addHouseIdToPerson
    # add_column takes in 4 args. last one is optional
    # tablename, columnname, datatype, optionshash
    add_column :people, :house_id, :integer, null: false
  end
end
