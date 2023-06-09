class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.integer :quantity
      t.belongs_to :product, null: false, foreign_key: true
      t.belongs_to :purchase, null: false, foreign_key: true

      t.timestamps
    end
  end
end
