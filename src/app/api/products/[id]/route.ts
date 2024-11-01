import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "@/model/product";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        if (!mongoose.isValidObjectId(id)) {
            return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
        }

        const product = await Product.findById(id);

        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({ result: product, success: true }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const payload = await request.json(); 

    try {
        if (!mongoose.isValidObjectId(id)) {
            return NextResponse.json({ result: "Invalid ID Format", success: false }, { status: 400 });
        }

        const product = await Product.findByIdAndUpdate(id, payload); 

        if (!product) {
            return NextResponse.json({ error: "Product not found", success: false }, { status: 404 });
        }

        return NextResponse.json({ result: "Product updated successfully", success: true }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error", success: false }, { status: 500 });
    }
}


export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        if (!mongoose.isValidObjectId(id)) {
            return NextResponse.json({ result: "Invalid ID Format", success: false }, { status: 400 });
        }

        const product = await Product.findByIdAndDelete(id); 

        if (!product) {
            return NextResponse.json({ error: "Product not found", success: false }, { status: 404 });
        }

        return NextResponse.json({ result: "Product Deleted successfully", success: true }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error", success: false }, { status: 500 });
    }
}
