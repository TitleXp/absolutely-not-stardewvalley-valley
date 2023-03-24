puts "Deleting old data.."

Purchase.destroy_all
Cart.destroy_all
Product.destroy_all
Farm.destroy_all
Farmer.destroy_all
User.destroy_all

puts "Creating farmers... "

10.times do
  Farmer.create!(
    name: Faker::Name.name,
    age: Faker::Number.between(from: 18, to: 55),
    sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/maru.png?v=1673289976&width=713",
    bio: Faker::Lorem.paragraph
  )
end

puts "Creating farms... "

10.times do
  Farm.create!(
    name: Faker::Company.name,
    location: Faker::Address.city(options: { with_state: true }),
    farm_pic_link: "https://stardewvalleywiki.com/mediawiki/images/d/de/Standard_Farm.png",
    farmer_id: Farmer.all.sample.id
  )
end

puts "Creating products... "

wild_horseradish = Product.create!(
  name: "Wild Horseradish",
  category: "vegetable",
  description: "radiant and spicy!",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

strawberry = Product.create!(
  name: "Strawberry",
  category: "fruit",
  description: "A sweet, juicy favorite with an appealing red color",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

potato = Product.create!(
  name: "Potato",
  category: "vegetable",
  description: "A widely cultivated tuber",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

parsnip = Product.create!(
  name: "Parsnip",
  category: "vegetable",
  description: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

blueberry = Product.create!(
  name: "Blueberry",
  category: "fruit",
  description: "A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

melon = Product.create!(
  name: "Melon",
  category: "fruit",
  description: "A cool, sweet summer treat",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

starfruit = Product.create!(
  name: "Starfruit",
  category: "fruit",
  description: "An extremely juicy fruit that grows in hot, humid weather. Slightly sweet with a sour undertone",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)


puts "Creating John Doe... "

john_doe = User.create!(
  username: "John Doe",
  email: "JD@gmail.com",
  password: "12345",
  bio: "I am John Doe",
  age: 28,
  profile_pic_link: "https://i.pinimg.com/originals/6a/7b/0b/6a7b0b15659ff7b51efa21ab9d5f49da.jpg"
)

puts "Creating admin... "

User.create!(
  username: "admin",
  email: "admin@example.com",
  password: "password",
  admin: true,
  bio: Faker::Lorem.paragraph(sentence_count: 3),
  age: Faker::Number.between(from: 18, to: 65),
  profile_pic_link: "https://www.pngitem.com/pimgs/m/129-1296474_profile-icon-png-download-windows-8-user-account.png"
)

puts "Creating users... "

10.times do
  User.create!(
    username: Faker::Internet.username,
    email: Faker::Internet.email,
    password: "password",
    bio: Faker::Lorem.paragraph(sentence_count: 3),
    age: Faker::Number.between(from: 18, to: 65),
    profile_pic_link: "https://www.pngitem.com/pimgs/m/129-1296474_profile-icon-png-download-windows-8-user-account.png"
  )
end

puts "Creating purchases... "



p1 = Purchase.create!(
  user_id: john_doe.id,
  is_purchased: true
)

puts "Creating carts for purchases... "

c1 = Cart.create!(
  quantity: 2,
  product_id: wild_horseradish.id,
  purchase_id: p1.id
)

puts "seeding done"


# anything below this line is for testing purposes

# puts "Deleting old data.."

# Cart.destroy_all
# Purchase.destroy_all
# Product.destroy_all
# Farm.destroy_all
# Farmer.destroy_all
# User.destroy_all

# puts "Creating farmers..."

# 10.times do
#   Farmer.create!(
#     name: Faker::Name.name,
#     age: Faker::Number.between(from: 18, to: 55),
#     sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/maru.png?v=1673289976&width=713",
#     bio: Faker::Lorem.paragraph
#   )
# end

# puts "Creating farms..."

# Farm.all.each do |farm|
#   3.times do
#     farm.products.create!(
#       name: Faker::Food.ingredient,
#       category: ["Vegetable", "Fruit", "Egg", "Dairy", "Meat", "Fish"].sample,
#       description: Faker::Lorem.sentence,
#       pic_link: Faker::LoremPixel.image(size: "600x600", category: 'food'),
#       price: Faker::Number.between(from: 100, to: 1000),
#       stock: Faker::Number.between(from: 1, to: 20)
#     )
#   end
# end

# puts "Creating users..."

# admin = User.create!(
#   username: "admin",
#   email: "admin@example.com",
#   password_digest: "12345",
# #   password_confirmation: "password",
#   admin: true,
#   bio: Faker::Lorem.paragraph,
#   age: Faker::Number.between(from: 18, to: 55),
#   profile_pic_link: "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
# )

# 10.times do
#   user = User.create!(
#     username: Faker::Internet.username,
#     email: Faker::Internet.email,
#     password_digest: "password",
#     # password_confirmation: "password",
#     bio: Faker::Lorem.paragraph,
#     age: Faker::Number.between(from: 18, to: 55),
#     profile_pic_link: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
#   )

#   2.times do
#     purchase = user.purchases.create!(
#       created_at: Faker::Time.between(from: DateTime.now - 30, to: DateTime.now)
#     )

#     3.times do
#       product = Product.order("RANDOM()").first
#       purchase.carts.create!(
#         product: product,
#         quantity: Faker::Number.between(from: 1, to: 5)
#       )
#     end
#   end
# end

# puts "Seed data generated!"