class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.string :item_name
      t.boolean :buy_sell
      t.text :description
      t.integer :user_id, index: true

      t.timestamps
    end
  end
end
