class User < ApplicationRecord
    has_many :job_applications
    has_many :jobs, through: :job_applications

    has_many :enrolls
    has_many :courses, through: :enrolls

    has_many :ideas

    has_secure_password
    validates :username, presence: true, uniqueness: true

end
