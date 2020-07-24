# FlowersController
#   POST #create
#     with valid params
#       redirects to the garden's show page after a flower is created (FAILED - 1)
#     with invalid params
#       redirects to the garden's show page if flower is NOT created (FAILED - 2)
#   DELETE #destroy
#     removes the flower from the database and redirects to the garden's show page (FAILED - 3)

class FlowersController < ApplicationController

    def create
        flower = Flower.create(params.require(:flower).permit(:flower_type, :gardener_id, :garden_id))
        if flower.save
            redirect_to garden_url(flower.garden_id)
        else
            redirect_to garden_url(flower.garden_id)
        end
    end

    #   DELETE #destroy
    # removes the flower from the database and redirects to the garden's show page (FAILED - 1)
    def destroy
        flower = Flower.find(params[:id])
        flower.destroy
        redirect_to garden_url(flower.garden_id)
    end

end
