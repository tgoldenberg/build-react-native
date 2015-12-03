# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Chapter.create(title: 'Chapter 1', content: "__Hello World__", authors: "Tom")
Chapter.create(title: "Chapter 2", content: "#Hey everyone", authors: "Tom")
Chapter.create(title: "Chapter 3", content: "#Hello World *** What's up?", authors: "Tom")
Chapter.create(title: "Chapter 4", content: "#Text ##Second Text", authors: "Tom")
Chapter.create(title: "Chapter 5", content: "_Hello World_", authors: "Tom")
