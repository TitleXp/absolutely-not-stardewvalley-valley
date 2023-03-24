class CartSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product_id
  belongs_to :product
  belongs_to :purchase
end
