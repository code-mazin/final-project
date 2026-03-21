class Job < ApplicationRecord
    has_many :job_applications
    has_many :users, through: :job_applications

    has_many :saved_jobs
    has_many :saved_by_users, through: :saved_jobs, source: :user

    validates :title, presence: true
end
