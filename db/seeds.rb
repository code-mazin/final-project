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

job1 = Job.create(title: "Ruby Developer", salary: "100,000", technology: "Ruby on Rails", email: "AcademyXi@x.com", 
work_from_home: true, published: true)

job2 = Job.create(title: "React Developer", salary: "90,000", technology: "React", email: "AcademyXi@x.com",
work_from_home: true, published: true)

job3 = Job.create(title: "NodeJs Developer", salary: "95,000", technology: "NodeJs", email: "AcademyXi@x.com",
work_from_home: true, published: true)

job4 = Job.create(title: "JavaScript Developer", salary: "100,000", technology: "JavaScript", email: "AcademyXi@x.com",
work_from_home: true, published: true)

job5 = Job.create(title: "Ruby on Rails Developer", salary: "120,000", technology: "Ruby on Rails", email: "AcademyXi@x.com",
work_from_home: false, published: true)

job6 = Job.create(title: "Ruby Developer", salary: "100,000", technology: "Ruby on Rails", email: "AcademyXi@x.com",
work_from_home: false, published: true)

job7 = Job.create(title: "React Developer", salary: "110,000", technology: "React", email: "AcademyXi@x.com",
work_from_home: false, published: true)

job8 = Job.create(title: "NodeJs Developer", salary: "100,000", technology: "NodeJs", email: "AcademyXi@x.com",
work_from_home: false, published: true)

job9 = Job.create(title: "JavaScript Developer", salary: "90,000", technology: "JavaScript", email: "AcademyXi@x.com",
work_from_home: false, published: true)

job10 = Job.create(title: "Ruby on Rails Developer", salary: "100,000", technology: "Ruby on Rails", email: "AcademyXi@x.com",
work_from_home: false, published: true)

puts "🏕 Seeding courses..."

course1 = Course.create(name: "FrontEnd Development", technology: "React", price: 5000, duration: 6)

course2 = Course.create(name: "BackEnd Development", technology: "Ruby", price: 8000, duration: 12)

course3 = Course.create(name: "React Course", technology: "React", price: 8000, duration: 12)

puts "✅ Done seeding!"