class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :description
      t.string :pic_link
      t.integer :price
      t.integer :stock
      t.belongs_to :farm, null: false, foreign_key: true

      t.timestamps
    end
  end
end
