import { comments } from './data'

export async function GET(){
    return Response.json(comments)
}

export async function POST(req){
    const comment = await req.json();
    console.log(comment)
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    console.log(newComment)
    comments.push(newComment)
    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json"},
        status: 201,
    })
}