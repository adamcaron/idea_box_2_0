class IdeasController < ApplicationController
  def index
    @ideas = Idea.all.sort_by(&:created_at).reverse
  end

  def create
    idea = Idea.create(title: params[:title], body: params[:body])
    date = idea.created_at.strftime("%b. %d, %Y") + " at " + idea.created_at.strftime("%l:%M%P")
    body = idea.body.truncate(100, separator: /\s/)
    render json: { title: idea.title,
                    body: body,
                    date: date,
                 quality: idea.quality,
                      id: idea.id }
  end

  def destroy
    render json: Idea.destroy(params[:id])
  end
end
