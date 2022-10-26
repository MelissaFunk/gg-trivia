class DeleteTotalCorrectFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :total_correct, :string
  end
end
