import { users } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }: {
    params: {
        age: number
    }
}) {
    const userData = users.filter((item) => item.age == params.age)
    return NextResponse.json(
        userData.length == 0 ?
            { result: "No Match Any data", success: false, status: 404 } :
            { result: userData, success: true, status: 200 }
    )
}

export async function PUT(request: NextRequest, { params }: {
    params: {
        age: number
    }
}) {
    const payload = await request.json()
    const userData = users.filter((item) => item.age == params.age)
    console.log(userData[0])
    console.log(payload)
    return NextResponse.json({ result: "user data updated", success: true }, { status: 200 })
}

export async function DELETE(request: NextRequest, { params }: {
    params: {
        age: number
    }
}) {
    const age = params.age;
    console.log(age)
    if(age){
        return NextResponse.json({Result:"User Deleted",success:true},{status:200})
    }
    return NextResponse.json({Result:"User not valid",success:false},{status:400})


}