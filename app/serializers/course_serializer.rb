class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :technology, :price, :duration
end
