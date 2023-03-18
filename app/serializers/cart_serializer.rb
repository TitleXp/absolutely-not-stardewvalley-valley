class CartSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :is_purchased
  has_one :product
  has_one :purchase
end
