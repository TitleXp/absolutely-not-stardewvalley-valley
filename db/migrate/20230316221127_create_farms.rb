class CreateFarms < ActiveRecord::Migration[7.0]
  def change
    create_table :farms do |t|
      t.string :name
      t.string :location
      t.string :farm_pic_link
      t.belongs_to :farmer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
