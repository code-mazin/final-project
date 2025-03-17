class Seek < ApplicationRecord
    belongs_to :job
    belongs_to :user

    validates :user, uniqueness: {scope: :job_id}

end
