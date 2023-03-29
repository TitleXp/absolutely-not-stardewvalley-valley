class PurchasesController < ApplicationController
    before_action :authorized_user
    before_action :find_purchase, only: [:update]

    def index # show all
        purchases = Purchase.all.where(user_id: session[:user_id])
        render json: purchases, status: :ok
    end

    # def create
    #     new_purchase = Purchase.create!(new_purchase_params)
    #     render json: new_purchase, status: :created
    # end

    def create
        p0 = Purchase.create!(
        user_id: @user.id,
        is_purchased: false
        )
        render json: p0, status: :created
    end

    def update
        @purchase.update!(edit_purchase_params)
        render json: @purchase, status: :accepted
    end

    private

    # def new_purchase_params
    #     params.permit(:user_id)
    # end

    def find_purchase
        @purchase = Purchase.find(params[:id])
    end

    def edit_purchase_params
        params.permit(:is_purchased)
    end



end
