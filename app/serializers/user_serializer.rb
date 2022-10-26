class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :total_correct
  # has_many :submissions

  def total_correct
    self.object.submissions.where(correct: true).count
  end
end


