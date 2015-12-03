class ChaptersController < ApplicationController
  def index
    @chapters = Chapter.all
  end
  
  def test
  end

  def show
    @chapter = Chapter.find(params[:id])
  end

  def edit
  end

  def new
  end

  def create
  end

  def update
  end

  def destroy
  end
end
