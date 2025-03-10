class UserSerializer < ActiveModel::Serializer
  attributes :username, :bio, :email, :age, :years_of_exp

  has_many :jobs
  has_many :courses
end
