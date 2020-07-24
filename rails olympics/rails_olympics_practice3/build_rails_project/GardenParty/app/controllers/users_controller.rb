class UsersController < ApplicationController

#     UsersController
#   GET #new
#     renders the new template
#   POST #create
#     with valid params
#       redirects to the garden index page after a user is created (FAILED - 1)
#     with invalid params
#       renders the new template if a user cannot be created (FAILED - 2)

    def new
        render :new
    end

    def create
        user = User.new(params.require(:user).permit(:username))
        if user.save
            redirect_to gardens_url
        else
            render :new
        end
    end
end
