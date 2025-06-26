class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :idea, :details
  has_one :user
end
