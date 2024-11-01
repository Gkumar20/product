import connectDB from "@/lib/db";
import Product from "@/model/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const data = await Product.find();
    return NextResponse.json({ result: data, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch products", success: false }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB(); 
    const payload = await request.json();
    const product = new Product(payload);
    await product.save();
    return NextResponse.json({ result: "Successfully posted the product", success: true }, { status: 200 });
  } catch (error) {
    console.error("Error posting data:", error);
    return NextResponse.json({ error: "Failed to post product", success: false }, { status: 500 });
  }
}
