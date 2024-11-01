export async function GET(request:Request){
    console.log("request url is" , request.url)
    return new Response("hello api")
}