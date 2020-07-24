class GardensController < ApplicationController

    def index
        @gardens = Garden.all 
        render :index
    end

    def show
        @garden = Garden.find(params[:id])
    end

    def create
        garden = Garden.create(params.require(:garden).permit(:name, :size, :garden_owner_id))
        if garden.save
            redirect_to gardens_url
        else
            render :new
        end
    end

end

# GardensController
#   GET #index
#     renders the index template and sets a @gardens variable for all Gardens in the database (FAILED - 1)
#   GET #show
#     renders the show template and sets a @garden variable for the Garden matching the params id (FAILED - 2)
#   POST #create
#     with valid params
#       redirects to the garden's index page after a garden is created (FAILED - 3)
#     with invalid params
#       renders the new template if a garden does not NOT save to the database (FAILED - 4)