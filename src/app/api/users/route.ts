import { users } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    const data = users;
    return NextResponse.json(data,{
        status:200
    })
}

export async function POST(request:NextRequest) {
    const payload = await  request.json();
    const {name} = payload;
    
    if(!name){
        return Response.json({result:"Name Error in  Data!", success:false},{status:400})
    }
    return Response.json({payload, result:"user created", success:true},{status:200})
}