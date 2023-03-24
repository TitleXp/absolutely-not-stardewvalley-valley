class Purchase < ApplicationRecord
  belongs_to :user
  has_many :carts, dependent: :destroy
  has_many :products, through: :carts

  validates :user_id, presence: true
end
