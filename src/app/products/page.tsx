'use client'
import Loading from "@/app/loading";
import DeleteProduct from "@/components/DeleteProduct";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";

interface Products {
    _id: Key;
    name: string;
    category: string;
    color: string;
    company: string;
    price: string;
}

const ProductPage = () => {
    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/products`);
            const data = await response.json();
            if (data.success) {
                setProducts(data.result);
            }
        } catch (error) {
            alert("Error fetching data");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteSuccess = () => {
        router.refresh(); 
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className=" flex  justify-between mx-3">
                <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Product List</h1>
                <Link href={"products/create"} className="text-xl bg-gradient-to-br from-orange-300 to-white dark:from-orange-700 dark:to-black text-center p-3 mb-2 rounded-lg shadow-md">Add New Product</Link>
            </div>
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 dark:bg-gray-900 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Category</th>
                        <th className="py-3 px-6 text-left">Color</th>
                        <th className="py-3 px-6 text-left">Company</th>
                        <th className="py-3 px-6 text-left">Price</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-4 px-6 text-gray-900 dark:text-gray-300">{product.name}</td>
                            <td className="py-4 px-6 text-gray-900 dark:text-gray-300">{product.category}</td>
                            <td className="py-4 px-6 text-gray-900 dark:text-gray-300">{product.color}</td>
                            <td className="py-4 px-6 text-gray-900 dark:text-gray-300">{product.company}</td>
                            <td className="py-4 px-6 text-gray-900 dark:text-gray-300">${product.price}</td>
                            <td className="py-4 px-6 text-center">
                                <Link href={`/products/${product._id}`} passHref>
                                    <button className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-blue-600 dark:hover:bg-blue-700">
                                        View
                                    </button>
                                </Link>
                                <Link href={`/products/edit/${product._id}`} passHref>
                                    <button className="bg-yellow-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-yellow-600 dark:hover:bg-yellow-700">
                                        Edit
                                    </button>
                                </Link>

                                <DeleteProduct id={product._id} onSuccess={handleDeleteSuccess} />

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductPage;
