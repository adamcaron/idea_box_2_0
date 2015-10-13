require 'rails_helper'

RSpec.describe Idea, type: :model do
  let(:idea) { $idea = Idea.create!(title: "Great Idea", body: "Here's an excellent idea.") }

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }

  describe "public instance methods" do
    context "responds to its methods" do
      it { expect(idea).to respond_to(:quality) }

      it { expect(idea).to respond_to(:swill?) }
      it { expect(idea).to respond_to(:plausible?) }
      it { expect(idea).to respond_to(:genius?) }
    end

    context "executes methods correctly" do
      context "#quality" do
        it "responds with 'swill', 'plausible', or 'genius'" do
          expect(idea.quality).to eq("swill" || "plausible" || "genius")
        end

        it "has a quality of 'swill' by default" do
          expect(idea.quality).to eq("swill")
        end
      end
    end
  end
end
