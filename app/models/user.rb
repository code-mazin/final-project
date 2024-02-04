class User < ApplicationRecord
    has_many :jobs

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
