class User < ApplicationRecord
  has_many :submissions
  has_secure_password

  validates :username, :password, presence: true
  validates :username, uniqueness: true
end
