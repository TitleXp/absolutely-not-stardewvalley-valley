class Farmer < ApplicationRecord
    has_one :farms

    validates :name, :age, :bio, :sprite_link, presence: true
    validates :name, uniqueness: true
    validates :age, numericality: {greater_than_or_equal_to: 18}
end
