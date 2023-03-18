class FarmerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :sprite_link, :bio
end
