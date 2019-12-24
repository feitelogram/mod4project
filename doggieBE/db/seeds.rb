# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Luv.destroy_all
Woofer.destroy_all


def search
    url = "https://dog.ceo/api/breeds/image/random/50"
    response = HTTP.get(url)
    response.parse
    #  byebug
 end

response = search.first[1]

response.each do |url| 
    Woofer.create(
    name: Faker::Creature::Dog.name,
    img: url,
    floofy: false,
    borks: false,
    pats: false
    )
end