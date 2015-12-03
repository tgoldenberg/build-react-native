class CreateChapters < ActiveRecord::Migration
  def change
    create_table :chapters do |t|
      t.string :title
      t.text :content
      t.text :authors

      t.timestamps null: false
    end
  end
end
