'use client'
import Loading from "@/app/loading";
import DeleteProduct from "@/components/DeleteProduct";
import Link from "next/link";
import { Key, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter

interface Product {
    name?: string;
    category?: string;
    color?: string;
    company?: string;
    price?: string;
}

const ProductViewPage = ({ params }: { params: { id: Key } }) => {
    const { id } = params;
    const router = useRouter(); 
    const [product, setProduct] = useState<Product>({});
    const [loading, setLoading] = useState<boolean>(true);
    
    console.log(process.env.NEXT_PUBLIC_BASEURL)


    const getProduct = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/products/` + id);
            const data = await response.json();
            if (data.success) {
                setProduct(data.result);
            }
        } catch (error) {
            alert("Error fetching data");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDeleteSuccess = () => {
        router.back();
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{product.name}</h1>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                    Category: <span className="font-normal text-gray-600 dark:text-gray-400">{product.category}</span>
                </p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                    Color: <span className="font-normal text-gray-600 dark:text-gray-400">{product.color}</span>
                </p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                    Company: <span className="font-normal text-gray-600 dark:text-gray-400">{product.company}</span>
                </p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                    Price: <span className="font-normal text-gray-600 dark:text-gray-400">${product.price}</span>
                </p>
            </div>
            <div className="mt-6">
                <button onClick={()=>router.back()} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 mr-2">
                    Go back
                </button>

                <Link href={`/products/edit/${params.id}`}>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 mr-2">
                        Edit
                    </button>
                </Link>
                <DeleteProduct id={params.id} onSuccess={handleDeleteSuccess} /> {/* Pass the handleDeleteSuccess as a prop */}
            </div>
        </div>
    );
};

export default ProductViewPage;
