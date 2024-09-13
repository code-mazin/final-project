class Job < ApplicationRecord
    # belongs_to :user
    has_many :seeks
    has_many :users, through: :seeks

    validates :title, presence: true
end
