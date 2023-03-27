class PurchasesController < ApplicationController
    before_action :authorized_user
    before_action :empty_cart

    def index # show all
        purchases = 
        Purchase.all.where(is_purchased: true)
        
        render json: purchases, status: :ok
    end


    def create
        purchase = Purchase.create!(
          user: current_user,
          is_purchased: true
        )
      
        current_user.carts.where(purchase_id: nil).update_all(purchase_id: purchase.id)
      
        render json: purchase, status: :created
      end

    def empty_cart
        purchase = Purchase.create!(
          user: current_user,
          is_purchased: false
        )
      
        current_user.carts.update_all(purchase_id: purchase.id)
      
        render json: purchase, status: :created
    end

    private





end
