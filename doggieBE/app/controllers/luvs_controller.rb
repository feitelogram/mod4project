class LuvsController < ApplicationController

def index
@luvs = Luv.all
render json: @luvs 
end

def create
@luv = Luv.create(luv_params)
if @luv.valid?
    render json: @luv
else
    render json: @luv.errors.full_messages
end
end

private

def luv_params
params.permit(:woofer_id, :user_id, :thoughts)
end


end

