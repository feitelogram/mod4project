class CreateWoofers < ActiveRecord::Migration[6.0]
  def change
    create_table :woofers do |t|
      t.string :name
      t.string :img
      t.boolean :floofy
      t.boolean :borks
      t.boolean :pats

      t.timestamps
    end
  end
end
