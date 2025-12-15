class User < ApplicationRecord
    has_many :seeks
    has_many :jobs, through: :seeks

    has_many :ideas

    has_secure_password
    validates :username, presence: true, uniqueness: true

end
