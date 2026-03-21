# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2026_03_19_144806) do
  create_table "job_applications", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "job_id", null: false
    t.text "cover_letter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_job_applications_on_job_id"
    t.index ["user_id", "job_id"], name: "index_job_applications_on_user_id_and_job_id", unique: true
    t.index ["user_id"], name: "index_job_applications_on_user_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.string "salary"
    t.string "technology"
    t.string "email"
    t.boolean "work_from_home"
    t.boolean "published"
    t.integer "app_deadline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "desc"
  end

  create_table "saved_jobs", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "job_id", null: false
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_saved_jobs_on_job_id"
    t.index ["user_id", "job_id"], name: "index_saved_jobs_on_user_id_and_job_id", unique: true
    t.index ["user_id"], name: "index_saved_jobs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "image_url"
    t.string "bio"
    t.string "email"
    t.integer "age"
    t.integer "years_of_exp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin"
  end

  add_foreign_key "job_applications", "jobs"
  add_foreign_key "job_applications", "users"
  add_foreign_key "saved_jobs", "jobs"
  add_foreign_key "saved_jobs", "users"
end
