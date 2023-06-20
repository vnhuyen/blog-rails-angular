class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]

  def index
    articles = Article.all()
    render json: articles, status: 200
  end
  def show
    if @article
      render json: @article, status: 200
    else
      render json: {error: 'Article Not Found!'}
    end
  end
  def new
    article = Article.new
  end

  def create
    article = Article.new(article_params)

    if article.save
      render json: article, status: 200
    else
      render json: {error: 'Article cannot be created!'}
    end
  end
  def update
    if @article.update(article_params)
      render json: @article, status: 200
    else
      render json: {error: 'Article cannot be updated!'}
    end
  end


  def destroy
    if @article
      @article.destroy
      render json: 'Article deleted!'
    end
  end

  private
  def article_params
    params.require(:article).permit(:title, :body, :author)
  end
  def set_article
    @article = Article.find(params[:id])
  end
end
