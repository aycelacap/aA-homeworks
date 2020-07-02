class CreatePerson < ActiveRecord::Migration[6.0]
  def change
    # this code is saying we've created a table 
    create_table :people do |t|
      # let's make a name and house_id for each person
      #since we want every person to have a name, 
      # if none is given,we hav a null: false constraint 
      t.string :name, null: false
      # let's save this into the rails db
      # run 'bundle exec rails db:migrate'
    end
  end
end
