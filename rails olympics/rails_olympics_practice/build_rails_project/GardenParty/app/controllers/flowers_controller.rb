class FlowersController < ApplicationController
    
    def create
        flower = Flower.create(new_flower_params)
        flower.save
        redirect_to garden_url(new_flower_params[:garden_id])
    end

    def destroy
        # find the flower
        # destroy flower
        # redirect 

        flower = Flower.find(params[:id])
        flower.destroy
        redirect_to garden_url(flower.garden_id)
    
    end

    def new_flower_params
        self.params.require(:flower).permit(:flower_type, :gardener_id, :garden_id)
    end
end
