class UsersController < ApplicationController

    before_action :authorized_user, except: [:create]


    def show # show (one) user in session
        render json: @user, status: :ok
    end

    def index # for admin only
        users = User.all
        render json: users, status: :ok
    end

    def create
        user = User.create!(create_user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        @user.update!(edit_user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        head :no_content
    end

    def find_logged_in_user
        find_user = User.find_by(id: session[:user_id]) 
        render json: find_user, status: :ok
    end

    private 

    # def show_auth_user
    #     @user = User.find_by(id: session[:user_id])
    # end

    def create_user_params
        params.permit(:username, :email, :password, :bio, :age, :profile_pic_link)
    end

    def edit_user_params
        params.permit(:email, :password, :bio, :profile_pic_link)
    end

end
