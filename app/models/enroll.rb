class Enroll < ApplicationRecord
  belongs_to :course
  belongs_to :user

  validates :user, uniqueness: {scope: :course_id}
end
