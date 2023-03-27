class Purchase < ApplicationRecord
  belongs_to :user
  # before_create :generate_purchase_id

  has_many :carts, dependent: :destroy
  has_many :products, through: :carts

  validates :user_id, presence: true

  private

  # def generate_purchase_id
  #   self.purchase_id = SecureRandom.uuid
  #   self.user_id = User.all.sample.id
  #   self.is_purchased = false
  # end

end
