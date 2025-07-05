# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Job.delete_all
Course.delete_all

puts "🏕 Seeding jobs..."

job1 = Job.create(title: "BackEnd Developer", salary: "100,000", technology: "Ruby on Rails", email: "AcademyXi@x.com", 
work_from_home: true, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level Ruby Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

job2 = Job.create(title: "FrontEnd Developer", salary: "90,000", technology: "React", email: "AcademyXi@x.com",
work_from_home: true, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level React Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

job3 = Job.create(title: "BackEnd Developer", salary: "95,000", technology: "NodeJs", email: "AcademyXi@x.com",
work_from_home: true, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level NodeJs Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

job4 = Job.create(title: "FrontEnd Developer", salary: "100,000", technology: "JavaScript", email: "AcademyXi@x.com",
work_from_home: true, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level JavaScript Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

job5 = Job.create(title: "BackEnd Developer", salary: "120,000", technology: "Ruby on Rails", email: "AcademyXi@x.com",
work_from_home: false, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level Ruby Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

job6 = Job.create(title: "BackEnd Developer", salary: "100,000", technology: "Ruby on Rails", email: "AcademyXi@x.com",
work_from_home: false, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level Ruby Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

job7 = Job.create(title: "FrontEnd Developer", salary: "110,000", technology: "React", email: "AcademyXi@x.com",
work_from_home: false, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level React Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

job8 = Job.create(title: "BackEnd Developer", salary: "100,000", technology: "NodeJs", email: "AcademyXi@x.com",
work_from_home: false, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level NodeJs Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

job9 = Job.create(title: "FrontEnd Developer", salary: "90,000", technology: "JavaScript", email: "AcademyXi@x.com",
work_from_home: false, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level JavaScript Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

job10 = Job.create(title: "BackEnd Developer", salary: "100,000", technology: "Ruby on Rails", email: "AcademyXi@x.com",
work_from_home: false, published: true, desc: "Our client is a software business based in Sydney and through continued growth have 
a permanent opportunity for a Mid level Ruby Developer to join the team. This is an exciting opportunity to join a fast growing
 business building a new product and be able to contribute to the full product")

puts "🏕 Seeding courses..."

course1 = Course.create(name: "FrontEnd Development", technology: "React", price: 5000, duration: 60)

course2 = Course.create(name: "BackEnd Development", technology: "Ruby", price: 8000, duration: 120)

course3 = Course.create(name: "React Course", technology: "React", price: 8000, duration: 120)

puts "✅ Done seeding!"