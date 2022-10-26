class DeleteTotalFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :total_correct, :integer
  end
end
