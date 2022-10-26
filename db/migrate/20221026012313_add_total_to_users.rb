class AddTotalToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :total_correct, :integer
  end
end
