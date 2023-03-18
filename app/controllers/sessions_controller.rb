class SessionsController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: 200
        else
            render json: {error: "Invalid Credentials"}, status: 401
            # byebug
        end
    end

    def logout
        session.delete :user_id
        head :no_content
    end
end
