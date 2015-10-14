require 'rails_helper'

RSpec.describe IdeasController, type: :controller do
  context "#index" do
  end

  context "#create" do
    it "responds with a newly-created idea" do
      title      = "Best. Idea. Ever."
      body       = "This is the body and description for my idea."

      post :create, format: :json, title: title, body: body

      new_idea = JSON.parse(response.body, symbolize_names: true)
      expect(response).to have_http_status(:success)
      expect(new_idea[:title]).to eq("Best. Idea. Ever.")
      expect(new_idea[:body]).to eq("This is the body and description for my idea.")
      expect(new_idea[:quality]).to eq("swill")
    end

    it "creates an idea in the database" do
      title     = "fake title"
      body      = "fake body"
      old_count = Idea.count

      create_idea = post :create, format: :json, title: title, body: body

      new_count = Idea.count
      expect(new_count).to eq(old_count + 1)
    end
  end

  context "#destroy" do
    it "deletes the idea from the database" do
      idea      = Idea.create(title: "Some Idea", body: "details")
      id        = idea.id
      old_count = Idea.count

      delete :destroy, format: :json, id: idea.id

      new_count = Idea.count
      expect(new_count).to eq(old_count - 1)
      expect(response.status).to be(200)
    end
  end
end