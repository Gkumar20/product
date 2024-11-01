'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateProductPage = () => {
    const router = useRouter()
    const [product, setProduct] = useState({
        name: "",
        category: "",
        company: "",
        color: "",
        price: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            const data = await response.json();

            if (data.success) {
                alert("Product created successfully");
                router.back();
            }
        } catch (error) {
            console.log(error);
            alert("Can't Create new Product"); 
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Create New Product</h1>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300">Name</label>
                    <input
                        type="text"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        placeholder="Enter product name"
                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:bg-gray-700 dark:text-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300">Category</label>
                    <input
                        type="text"
                        value={product.category}
                        onChange={(e) => setProduct({ ...product, category: e.target.value })}
                        placeholder="Enter product category"
                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:bg-gray-700 dark:text-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300">Color</label>
                    <input
                        type="text"
                        value={product.color}
                        onChange={(e) => setProduct({ ...product, color: e.target.value })}
                        placeholder="Enter product color"
                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:bg-gray-700 dark:text-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300">Company</label>
                    <input
                        type="text"
                        value={product.company}
                        onChange={(e) => setProduct({ ...product, company: e.target.value })}
                        placeholder="Enter company name"
                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:bg-gray-700 dark:text-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300">Price</label>
                    <input
                        type="text"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="Enter product price"
                        className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:bg-gray-700 dark:text-gray-200"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProductPage;