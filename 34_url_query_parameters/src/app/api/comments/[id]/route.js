import { comments } from '../data';

export async function GET(req, { params }) {
  
    const commentId = await params;

    const comment = comments.find(
        (comment) => comment.id === parseInt(commentId.id)
    );

    if (!comment) {
        return Response.json(
            { error: "Comment not found" },
            { status: 404 }
        );
    }

    return Response.json(comment);
}

export async function PATCH(req, { params }){
    
    const commentId = await params;
    const body = await req.json();
    const { text } = body

    const index = comments.findIndex(
        (comment) => comment.id === parseInt(commentId.id)
    );

    comments[index].text = text
    return Response.json(comments[index]);

}


export async function DELETE(req, { params }){
    
    const commentId = await params;

    const index = comments.findIndex(
        (comment) => comment.id === parseInt(commentId.id)
    );

    const deletedComment = comments[index]

    comments.splice(index, 1)

    return Response.json(deletedComment);
    
}
