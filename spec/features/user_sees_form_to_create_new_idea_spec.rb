require 'rails_helper'

feature "User visits homepage" do
  scenario "and sees a form to add a new idea" do
    visit root_path

    expect(page).to have_content("Add an Idea:")
    expect(page).to have_content("Title")
    expect(page).to have_content("Body")
    expect(page).to have_button("Save")
  end
end