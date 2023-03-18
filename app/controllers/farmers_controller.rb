class FarmersController < ApplicationController
    before_action :authorized_user, only: [:create, :update, :destroy]
    before_action :find_farmer, only: [:show, :update, :destroy]


    def index 
        farmers = Farmer.all
        render json: farmers, status: :ok
    end

    def show
        render json: @farmer, status: :ok
    end

    def create
        new_farmer = Farmer.create!(create_farmer_params)
        render json: new_farmer, status: :created
    end

    def update
        @farmer.update!(edit_farmer_params)
        render json: @farmer, status: :accepted
    end

    def destroy
        @farmer.destroy
        head :no_content
    end

    private

    def find_farmer
        @farmer = Farmer.find(params[:id])
    end

    def create_farmer_params
        params.permit(:name, :age, :sprite_link, :bio)
    end

    def edit_farmer_params
        params.permit(:name, :age, :sprite_link, :bio)
    end

end
