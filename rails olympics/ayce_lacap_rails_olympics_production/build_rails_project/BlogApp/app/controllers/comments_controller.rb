class CommentsController < ApplicationController

#     CommentsController
#   POST #create
#     with valid params
#       redirects to the blog's show page after a comment is created (FAILED - 1)
#     with invalid params
#       redirects to the blog's show page if comment is NOT created (FAILED - 2)
#   DELETE #destroy
#     removes the comment from the database and redirects to the blog's show page (FAILED - 3)

    def create
            comment = Comment.new(params.require(:comment).permit(:body, :author_id, :blog_id))
        if comment.save
            redirect_to blog_url(comment.blog_id)
        else
            redirect_to blog_url(comment.blog_id)
        end
    end



    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        redirect_to blog_url(comment.blog_id)
    end
end