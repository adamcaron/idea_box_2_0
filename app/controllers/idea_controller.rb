class IdeaController < ApplicationController
  def index
    @ideas = Idea.all.reverse
  end
end
