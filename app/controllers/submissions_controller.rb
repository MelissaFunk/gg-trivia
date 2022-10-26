class SubmissionsController < ApplicationController

  def create
    render json: Submission.create(sub_params), status: :created
  end

  private

  def sub_params
    params.permit(:submission, :correct, :question_id, :user_id)
  end

end
