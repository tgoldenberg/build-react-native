class PagesController < ApplicationController
  respond_to :html
  def home
    @posts = Post.all.to_json
  end
end
