class Farm < ApplicationRecord
  belongs_to :farmer
  has_many :products

  validates :name, :location, :farm_pic_link, presence: true
  validates :name, uniqueness: true
end
