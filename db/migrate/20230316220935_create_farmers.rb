class CreateFarmers < ActiveRecord::Migration[7.0]
  def change
    create_table :farmers do |t|
      t.string :name
      t.integer :age
      t.string :sprite_link
      t.string :bio

      t.timestamps
    end
  end
end
