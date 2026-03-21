class User < ApplicationRecord
    has_many :job_applications
    has_many :jobs, through: :job_applications

    has_many :saved_jobs
    has_many :saved_jobs_list, through: :saved_jobs, source: :job    

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true

end
