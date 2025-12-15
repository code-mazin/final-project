class UserSerializer < ActiveModel::Serializer
  attributes :username, :bio, :email, :age, :years_of_exp, :admin

  has_many :jobs
end
