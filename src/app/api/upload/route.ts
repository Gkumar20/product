import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.formData();
    const file = data.get('file') as File | null;

    if (!file || typeof file === "string") {
        return NextResponse.json(
            { message: "Image not found", success: false },
            { status: 400 }
        );
    }

    try {
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/${file.name}`;

        await writeFile(path, buffer);

        return NextResponse.json(
            { message: "Image uploaded", success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error writing file:", error);
        return NextResponse.json(
            { message: "Error uploading image", success: false },
            { status: 500 }
        );
    }
}
