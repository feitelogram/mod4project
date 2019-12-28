class UsersController < ApplicationController

def index
@users= User.all
render json: @users, include: [:woofers, :luvs]
end

def show
@user = User.find(params[:id])
render json: @user, include: [:woofers, :luvs]
end

def create
@user = User.find_or_create_by(username: params[:username])
render json: @user
end

end
