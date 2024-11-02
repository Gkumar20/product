'use client';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function SaveImages() {
    const [image, setImage] = useState<File | null>(null);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image) {
            console.log(image);
            const data = new FormData();
            data.set('file',image)
            const response = await fetch("../api/upload",{
                method:"POST",
                body:data
            })
            const result =await response.json();
            if(result.success){
                alert("image uploaded")
            }else(
                alert("something internal error")
            )
        } else {
            console.log("No image selected");
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setImage(file || null);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                />
                <button type="submit">Upload Image</button>
            </form>
        </div>
    );
}
