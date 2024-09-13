class JobSerializer < ActiveModel::Serializer
  attributes :title, :salary, :technology, :email, :work_from_home, :published
end
