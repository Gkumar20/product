// Example of the DeleteProduct component
import React, { Key } from 'react';

const DeleteProduct = ({ id, onSuccess }: {
    id: Key,
    onSuccess: () => void
}) => {
    const handleDelete = async () => {
        const confirmed = confirm("Are you sure you want to delete this product?");
        if (confirmed) {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/products/${id}`, {
                    method: "DELETE",
                });
                const data = await response.json();
                if (data.success) {
                    alert("Product deleted successfully");
                    onSuccess();
                } else {
                    alert("Error deleting product");
                }
            } catch (error) {
                console.error("Failed to delete the product:", error);
                alert("Error deleting product");
            }
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
            Delete
        </button>
    );
};

export default DeleteProduct;
