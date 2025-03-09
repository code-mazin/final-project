class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :salary, :technology, :email, :work_from_home
end
