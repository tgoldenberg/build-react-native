class PagesController < ApplicationController
  respond_to :html, :json
  def home
    @posts = Post.all.order("created_at DESC").to_json
  end
end
