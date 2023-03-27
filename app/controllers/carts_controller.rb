class CartsController < ApplicationController
    # before_action :authorized_user
    before_action :find_item_in_cart, only: [:destroy, :update, :show]

    def index
        # cart_items = Cart.all.where(user_id: session[:user_id])
        # cart_items = Cart.all.where(purchase: false)
        cart_items = Cart.all.where(purchase: false)
        # cart_items = Cart.all.where(purchase_id: [:purchase_id])

        render json: cart_items, status: :ok
    end

    def completed_purchase
        completed_items = Cart.all.where(purchase: true)
        render json: completed_items, status: :ok
    end

    def show
        render json: @item, status: :ok
    end

    def create
        new_cart = Cart.create!(create_cart_params)
        render json: new_cart, status: :created
    end

    def update
        @item.update!(edit_cart_params)
        render json: @item, status: :accepted
    end

    def destroy
        @item.destroy
        head :no_content
    end
    
    private


    def find_item_in_cart
        @item = Cart.find(params[:id])
    end

    def create_cart_params
        params.permit(:product_id, :purchase_id, :quantity)
    end

    def edit_cart_params
        params.permit(:quantity)
    end


end
