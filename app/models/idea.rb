class Idea < ApplicationRecord
  belongs_to :user

  validates :idea, presence: true
  validates :details, length: { minimum: 10 }
end
