"use client"
import { users } from "@/utils/db";


export default function UserAge({ params }: { params: { age: string } }) {

    const { age } = params;
    const user = users.filter((u) => u.age === parseInt(age));

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">User not found</h2>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
                    Details of {user[0].name}
                </h2>
                <div className="mt-4">
                    <p className="text-lg text-gray-700 dark:text-gray-300"><strong>Age:</strong> {user[0].age}</p>
                    <p className="text-lg text-gray-700 dark:text-gray-300"><strong>Email:</strong> {user[0].email}</p>
                </div>


                

            </div>
        </div>
    );
}
