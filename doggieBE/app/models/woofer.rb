class Woofer < ApplicationRecord
has_many :luvs
has_many :users, through: :luvs
end
