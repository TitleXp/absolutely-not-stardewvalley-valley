class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :is_purchased, :created_at, :updated_at
  has_one :user
  has_many :products
  has_many :carts
end
