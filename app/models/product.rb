class Product < ApplicationRecord
  belongs_to :farm
  has_many :carts, dependent: :destroy
  has_many :purchases, through: :carts

  validates :name, :category, :description, :pic_link, :price, :stock, presence: true
  validates :name, uniqueness: true
  validates :price, :stock, numericality: {greater_than: 0}
  validates :category, inclusion: {in: %w(vegetable fruit ore tool), message: "%{value} is not within the accepted category."}
  validate :out_of_stock

  def out_of_stock
    if stock === 0
      destroy
    end
  end

end
