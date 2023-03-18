class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :description, :pic_link, :price, :stock
  has_one :farm
end
