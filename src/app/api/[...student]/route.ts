import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{params}:{
    params:{
        student:string[]
}}) {
    const userdata = params.student;
    console.log(userdata)
    return NextResponse.json({result:userdata,success:true},{status:200})
}