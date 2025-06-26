class User < ApplicationRecord
    has_many :seeks
    has_many :jobs, through: :seeks

    has_many :enrolls
    has_many :courses, through: :enrolls

    has_secure_password
    validates :username, presence: true, uniqueness: true

    has_many :ideas
end
