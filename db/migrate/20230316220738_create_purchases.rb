class CreatePurchases < ActiveRecord::Migration[7.0]
  def change
    create_table :purchases do |t|
      t.boolean :is_purchased, default: false, null:false
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
