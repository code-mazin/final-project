class UserSerializer < ActiveModel::Serializer
  attributes :username

  has_many :jobs
  has_many :courses
end
