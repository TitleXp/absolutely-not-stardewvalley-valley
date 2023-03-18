class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid

    def current_user
        #memoization
        @user ||= User.find_by(id: session[:user_id]) if session[:user_id]
        # user
    end

    def authorized_user  
        return render json: { error: "Not authorized" }, status: :unauthorized unless current_user
    end


    private

    def render_not_found(invalid)
      render json: {error: "#{invalid.model} not found"}, status: :not_found 
  
    end
  
    def render_not_valid(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
