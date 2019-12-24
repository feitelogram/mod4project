class CreateLuvs < ActiveRecord::Migration[6.0]
  def change
    create_table :luvs do |t|
      t.text :thoughts
      t.belongs_to :woofer, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
