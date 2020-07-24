class UsersController < ApplicationController

    def new
        render :new
    end

    def create
        user = User.create(self.params.require(:user).permit(:username))
        if user.save
            redirect_to gardens_url
        else
            render :new
        end
    end

end
