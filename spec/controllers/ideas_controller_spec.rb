require 'rails_helper'

RSpec.describe IdeasController, type: :controller do
  context "#create" do
    it "responds with a newly-created idea" do
      title      = "Best. Idea. Ever."
      body       = "This is the body and description for my idea."
      idea_count = Idea.count

      post :create, format: :json, title: title, body: body

      new_idea       = JSON.parse(response.body, symbolize_names: true)
      new_idea_count = Idea.count

      # Creates an idea in the database
      expect(new_idea_count).to eq(idea_count + 1)

      # The response contains the new idea's information
      expect(response).to have_http_status(:success)
      expect(new_idea[:title]).to eq("Best. Idea. Ever.")
      expect(new_idea[:body]).to eq("This is the body and description for my idea.")
      expect(new_idea[:quality]).to eq("swill")
    end
  end
end