class User < ApplicationRecord
has_many :luvs
has_many :woofers, through: :luvs
end
