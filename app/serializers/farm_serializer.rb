class FarmSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :farm_pic_link
  has_one :farmer
end
