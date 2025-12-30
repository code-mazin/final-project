class JobApplication < ApplicationRecord
  belongs_to :user
  belongs_to :job

  validates :job_id,
            uniqueness: {
              scope: :user_id,
              message: "You have laready applied for this job"
            }
end
