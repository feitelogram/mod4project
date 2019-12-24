# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_20_150405) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "luvs", force: :cascade do |t|
    t.text "thoughts"
    t.bigint "woofer_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_luvs_on_user_id"
    t.index ["woofer_id"], name: "index_luvs_on_woofer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "woofers", force: :cascade do |t|
    t.string "name"
    t.string "img"
    t.boolean "floofy"
    t.boolean "borks"
    t.boolean "pats"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "luvs", "users"
  add_foreign_key "luvs", "woofers"
end
