class SubmissionSerializer < ActiveModel::Serializer
  attributes :id, :submission, :correct, :question_id, :user_id
end
