class FarmsController < ApplicationController
    before_action :authorized_user, only: [:create, :update, :destroy]
    before_action :find_farm, only: [:show, :update, :destroy]


    def index 
        farms = Farm.all
        render json: farms, status: :ok
    end

    def show
        render json: @farm, status: :ok
    end

    def create
        new_farm = Farm.create!(create_farm_params)
        render json: new_farm, status: :created
    end

    def update
        @farm.update!(edit_farm_params)
        render json: @farm, status: :accepted
    end

    def destroy
        @farm.destroy
        head :no_content
    end

    private

    def find_farm
        @farm = Farm.find(params[:id])
    end

    def create_farm_params
        params.permit(:name, :location, :farm_pic_link, :farmer_id)
    end

    def edit_farm_params
        params.permit(:name, :location, :farm_pic_link, :farmer_id)
    end
end
