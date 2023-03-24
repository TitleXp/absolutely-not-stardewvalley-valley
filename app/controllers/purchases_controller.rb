class PurchasesController < ApplicationController
    before_action :authorized_user
    before_action :empty_cart

    def index # show all
        purchases = Purchase.all.where(user_id: session[:user_id])
        render json: purchases, status: :ok
    end

    def create
        new_purchase = Purchase.create!(new_purchase_params)
        render json: new_purchase, status: :created
    end

    def empty_cart
        p0 = Purchase.create!(
        user_id: [:user_id],
        is_purchased: false
    end

    private

    def new_purchase_params
        params.permit(:user_id)
    end



end
