class WoofersController < ApplicationController

def index
@woofers = Woofer.all
render json: @woofers.shuffle
end

def update
@woofer= Woofer.find(params[:id])
@woofer.update(woofer_params)
render json: @woofer
end


private

def woofer_params
params.permit(:id, :floofy, :borks, :pats, :name)
end

end
