class Course < ApplicationRecord
  has_many :enrolls
  has_many :users, through: :enrolls
end
