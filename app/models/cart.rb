class Cart < ApplicationRecord
  belongs_to :product
  belongs_to :purchase

  validates :quantity, numericality: {greater_than: 0}
end
