require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

class Seed
  def self.start
    seed = Seed.new
    seed.generate_ideas
  end

  def generate_ideas
    10.times do
      title = Faker::Lorem.sentence
      body  = Faker::Lorem.paragraph(4) # sentence count
      Idea.create!(title: title, body: body)
    end
  end
end

Seed.start