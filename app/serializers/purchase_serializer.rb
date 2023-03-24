class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :is_purchased
  has_one :user
  has_many :products
  has_many :carts
end
