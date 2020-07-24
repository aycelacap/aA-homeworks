class BlogsController < ApplicationController

#     BlogsController
#   GET #index
#     renders the index template and sets a @blogs variable for all Blogs in the database (FAILED - 1)
#   GET #show
#     renders the show template and sets a @blog variable for the Blog matching the params id (FAILED - 2)
#   POST #create
#     with valid params
#       redirects to the blog's index page after a blog is created (FAILED - 3)
#     with invalid params
#       renders the new template if a blog does not NOT save to the database (FAILED - 4)
#   DELETE #destroy
#     removes the blog from the database and redirects to the blog's index page (FAILED - 5)

    def index
        @blogs = Blog.all
        render :index
    end

    def show
        @blog = Blog.find_by(id: params[:id])
        render :show
    end

    def create
        blog = Blog.new(params.require(:blog).permit(:title, :body, :author_id))
        if blog.save
            redirect_to blogs_url
        else
            render :new
        end
    end

    def destroy
        blog = Blog.find_by(id: params[:id])
        blog.destroy
        redirect_to blogs_url
    end


end
