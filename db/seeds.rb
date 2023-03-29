puts "Deleting old data.."

Purchase.destroy_all
Cart.destroy_all
Product.destroy_all
Farm.destroy_all
Farmer.destroy_all
User.destroy_all

puts "Creating farmers... "

# testing datat for farmers
# 7.times do
#   Farmer.create!(
#     name: Faker::Name.name,
#     age: Faker::Number.between(from: 18, to: 55),
#     sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/maru.png?v=1673289976&width=713",
#     bio: Faker::Lorem.paragraph
#   )
# end

maru = Farmer.create!(
  name: "Maru",
    age: Faker::Number.between(from: 18, to: 35),
    sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/maru.png?v=1673289976&width=493",
    bio: Faker::Lorem.paragraph
)

haley = Farmer.create!(
  name: "Haley",
    age: Faker::Number.between(from: 18, to: 35),
    sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/haley.png?v=1673289640&width=493",
    bio: Faker::Lorem.paragraph
)

leah = Farmer.create!(
  name: "Leah",
    age: Faker::Number.between(from: 18, to: 35),
    sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/leah.png?v=1673289883&width=493",
    bio: Faker::Lorem.paragraph
)

abigail = Farmer.create!(
  name: "Abigail",
    age: Faker::Number.between(from: 18, to: 35),
    sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/abigail.png?v=1673288304&width=493",
    bio: Faker::Lorem.paragraph
)

shane = Farmer.create!(
  name: "Shane",
    age: Faker::Number.between(from: 18, to: 35),
    sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/shane.png?v=1673290343&width=493",
    bio: Faker::Lorem.paragraph
)

harvey = Farmer.create!(
  name: "Harvey",
    age: Faker::Number.between(from: 18, to: 35),
    sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/harvey.png?v=1673289782&width=493",
    bio: Faker::Lorem.paragraph
)

sebastian = Farmer.create!(
  name: "Sebastian",
    age: Faker::Number.between(from: 18, to: 35),
    sprite_link: "https://cdn.shopify.com/s/files/1/0639/5016/0093/products/sebastian.png?v=1673290264&width=493",
    bio: Faker::Lorem.paragraph
)


puts "Creating farms... "

# testing data for farms
# 10.times do
#   Farm.create!(
#     name: Faker::Company.name,
#     location: Faker::Address.city(options: { with_state: true }),
#     farm_pic_link: "https://stardewvalleywiki.com/mediawiki/images/d/de/Standard_Farm.png",
#     farmer_id: Farmer.all.sample.id
#   )
# end

std_farm = Farm.create!(
  name: Faker::Company.name,
  location: Faker::Address.city(options: { with_state: true }),
  farm_pic_link: "https://stardewvalleywiki.com/mediawiki/images/d/de/Standard_Farm.png",
  farmer_id: maru.id
)

riverland_farm = Farm.create!(
  name: Faker::Company.name,
  location: Faker::Address.city(options: { with_state: true }),
  farm_pic_link: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Riverlands_Farm.png",
  farmer_id: haley.id
)

forest_farm = Farm.create!(
  name: Faker::Company.name,
  location: Faker::Address.city(options: { with_state: true }),
  farm_pic_link: "https://stardewvalleywiki.com/mediawiki/images/6/64/Forest_Farm.png",
  farmer_id: leah.id
)

hilltop_farm = Farm.create!(
  name: Faker::Company.name,
  location: Faker::Address.city(options: { with_state: true }),
  farm_pic_link: "https://stardewvalleywiki.com/mediawiki/images/4/40/Hilltop_Farm.png",
  farmer_id: abigail.id
)

wilderness_farm = Farm.create!(
  name: Faker::Company.name,
  location: Faker::Address.city(options: { with_state: true }),
  farm_pic_link: "https://stardewvalleywiki.com/mediawiki/images/f/fd/Wilderness_Farm.png",
  farmer_id: shane.id
)

four_corners_farm = Farm.create!(
  name: Faker::Company.name,
  location: Faker::Address.city(options: { with_state: true }),
  farm_pic_link: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Four_Corners_Farm.png",
  farmer_id: harvey.id
)

beach_farm = Farm.create!(
  name: Faker::Company.name,
  location: Faker::Address.city(options: { with_state: true }),
  farm_pic_link: "https://stardewvalleywiki.com/mediawiki/images/d/d9/Beach_Farm.png",
  farmer_id: sebastian.id
)


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

leek = Product.create!(
  name: "Leek",
  category: "vegetable",
  description: "A tasty relative of the onion",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

salmonberry = Product.create!(
  name: "Salmonberry",
  category: "fruit",
  description: "A spring-time berry with the flavor of the forest",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/5/59/Salmonberry.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

grape = Product.create!(
  name: "Grape",
  category: "fruit",
  description: "A sweet cluster of fruit",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

rhubarb = Product.create!(
  name: "Rhubarb",
  category: "fruit",
  description: "The stalks are extremely tart, but make a great dessert when sweetened",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

rice = Product.create!(
  name: "Rice",
  category: "vegetable",
  description: "A basic grain. Once cooked, becomes soft and fluffy",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/f/fe/Unmilled_Rice.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

corn = Product.create!(
  name: "Corn",
  category: "vegetable",
  description: "One of the most popular grains. The sweet, fresh cobs are a summer favorite",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/archive/f/f8/20170225200641%21Corn.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

hot_pepper = Product.create!(
  name: "Hot Pepper",
  category: "fruit",
  description: "Fiery hot with a hint of sweetness",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

radish = Product.create!(
  name: "Radish",
  category: "vegetable",
  description: "A crisp and refreshing root vegetable with hints of pepper when eaten raw",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

red_cabbage = Product.create!(
  name: "Red Cabbage",
  category: "vegetable",
  description: "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

tomato = Product.create!(
  name: "Tomato",
  category: "vegetable",
  description: "Rich and slightly tangy, the Tomato has a wide variety of culinary uses",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

wheat = Product.create!(
  name: "Wheat",
  category: "vegetable",
  description: "One of the most widely cultivated grains. Makes a great flour for breads and cakes",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

artichoke = Product.create!(
  name: "Artichoke",
  category: "vegetable",
  description: "The bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Artichoke.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

beet = Product.create!(
  name: "Beet",
  category: "vegetable",
  description: "The bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

cranberries = Product.create!(
  name: "Cranberries",
  category: "fruit",
  description: "These tart red berries are a traditional winter food",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

pineapple = Product.create!(
  name: "Pineapple",
  category: "fruit",
  description: "A sweet and tangy tropical treat",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Pineapple.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

apricot = Product.create!(
  name: "Apricot",
  category: "fruit",
  description: "A tender little fruit with a rock-hard pit",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Apricot.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

cherry = Product.create!(
  name: "Cherry",
  category: "fruit",
  description: "It's popular, and ripens sooner than most other fruits",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/2/20/Cherry.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

banana = Product.create!(
  name: "Banana",
  category: "fruit",
  description: "A sweet, starchy tropical fruit",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/6/69/Banana.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

mango = Product.create!(
  name: "Mango",
  category: "fruit",
  description: "A big, sweet tropical fruit with a unique flavor",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/3/38/Mango.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

apple = Product.create!(
  name: "Apple",
  category: "fruit",
  description: "A crisp fruit used for juice and cider",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

peach = Product.create!(
  name: "Peach",
  category: "fruit",
  description: "It's almost fuzzy to the touch",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png",
  price: Faker::Number.between(from: 1.00, to: 20.00),
  stock: Faker::Number.between(from: 10, to: 100),
  farm_id: Farm.all.sample.id
)

orange = Product.create!(
  name: "Orange",
  category: "fruit",
  description: "Juicy, tangy, and bursting with sweet summer aroma",
  pic_link: "https://stardewvalleywiki.com/mediawiki/images/4/43/Orange.png",
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

# puts "Creating users... "

# 5.times do
#   User.create!(
#     username: Faker::Internet.username,
#     email: Faker::Internet.email,
#     password: "password",
#     bio: Faker::Lorem.paragraph(sentence_count: 3),
#     age: Faker::Number.between(from: 18, to: 65),
#     profile_pic_link: "https://www.pngitem.com/pimgs/m/129-1296474_profile-icon-png-download-windows-8-user-account.png"
#   )
# end

# puts "Creating purchases... "



# p1 = Purchase.create!(
#   user_id: john_doe.id,
#   is_purchased: true
# )

# p2 = Purchase.create!(
#   user_id: john_doe.id,
#   is_purchased: true
# )

# Purchase.create!(
#   user_id: User.all.sample.id,
#   created_at: Faker::Date.between(from: 1.year.ago, to: Date.today),
#   is_purchased: false
# )

# puts "Creating carts for purchases... "

# c1 = Cart.create!(
#   quantity: 123,
#   product_id: wild_horseradish.id,
#   purchase_id: Purchase.all.sample.id
# )

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