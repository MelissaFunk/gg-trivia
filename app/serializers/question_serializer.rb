class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :prompt, :option1, :option2, :option3, :option4, :answer
end
