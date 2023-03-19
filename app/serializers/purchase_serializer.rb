class PurchaseSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_many :products
  has_many :carts
end
