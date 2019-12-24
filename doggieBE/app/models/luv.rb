class Luv < ApplicationRecord
  belongs_to :woofer
  belongs_to :user
  validates :thoughts, presence: true
end
