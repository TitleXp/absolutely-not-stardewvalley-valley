require 'stripe'
require 'dotenv'
Dotevn.load

# class ChargesController < ApplicationController
#     # skip_before_action :authorize
#     # def create
#     #    amount = params[:price]
#     #    token = params[:charge][:token]

#     # #    Stripe.api_key = {process.env.STRIPE_PUBLISHABLE_KEY}
#     # Stripe.api_public_key = Rails.application.credentials.stripe[:stripe_publishable_key]


#     #    charge = Stripe::Charge.create!(
#     #          amount: amount,
#     #          currency: 'usd',
#     #          source: token
#     #    )
#     #      if charge.paid
#     #          render json: { message: 'Payment processed successfully', status: 'succeeded' }, status: :ok
#     #      else
#     #          render json: { error: 'Payment processing failed' }, status: :unprocessable_entity
#     #      end
#     #  rescue Stripe::CardError => e
#     #      render json: { error: e.message }, status: :unprocessable_entity
#     #  end
# end

# class ChargesController < ApplicationController

#     def create
#         customer = Stripe::Customer.create(
#             email: params[:email],
#             source: params[:token]
#         )

#         charge = Stripe::Charge.create(
#             amount: params[:amount]
#             description: 'Absolutely-not-stardewvalley-valley purchase order'
#             currency: 'usd'
#         )

#         order = Order.create(
#             customer_email: params[:email],
#             amount: params[:amount],
#             stripe_charge_id: charge.id
#         )

#         render json: { message: 'Payment Successful', order_id: order.id}
#     rescue Stripe::CardError => e
#         render json: { error: e.message }
#     end
# end

class ChargesController < ApplicationController
    def create
      payment_method_id = params[:payment_method_id]
  
      payment_intent = Stripe::PaymentIntent.create({
        amount: <price_in_cents>,
        currency: 'usd',
        payment_method: payment_method_id,
        confirmation_method: 'manual',
        confirm: true
      })
  
      if payment_intent.status == 'succeeded'
        purchase = Purchase.find(params[:purchase_id])
        purchase.update(is_purchased: true)
  
        render json: { message: 'Payment succeeded!' }, status: :ok
      else
        render json: { error: 'Payment failed.' }, status: :unprocessable_entity
      end
    end
  end
