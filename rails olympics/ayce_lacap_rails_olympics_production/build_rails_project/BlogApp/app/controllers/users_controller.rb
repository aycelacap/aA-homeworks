class UsersController < ApplicationController

#     UsersController
#   GET #show
#     renders the show template and sets a @user variable for the User matching the params id (FAILED - 4)
#   POST #create
#     with valid params
#       redirects to the blog index page after a user is created (FAILED - 5)
#     with invalid params
#       renders the new template if a user cannot be created (FAILED - 6)

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        user = User.new(params.require(:user).permit(:email))
        if user.save
            redirect_to blogs_url
        else
            render :new
        end
    end
end
