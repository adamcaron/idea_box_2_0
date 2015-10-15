class IdeasController < ApplicationController

  def index
    @ideas = Idea.all.sort_by(&:created_at).reverse
  end

  def edit
    @idea = Idea.find(params[:id])
  end

  def update
    Idea.find(params[:id]).update(
      title: params[:idea][:title],
      body:  params[:idea][:body])
    redirect_to root_path
  end

  def create
    idea = Idea.create(title: params[:title], body: params[:body])
    render json: {
      title:   idea.title,
      body:    idea.truncated_body,
      date:    idea.date,
      quality: idea.quality,
      id:      idea.id }
  end

  def destroy
    render json: Idea.destroy(params[:id])
  end

  def quality_up
    idea = Idea.find(params[:id])
    idea.increase_quality
    render json: idea
  end

  def quality_down
    idea = Idea.find(params[:id])
    idea.decrease_quality
    render json: idea
  end

end
