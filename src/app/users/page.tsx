
import Link from "next/link";
import { users } from "@/utils/db";
import DeleteButton from "@/components/DeleteButton";

export default function UsersPage() {
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-4xl p-4 bg-white dark:bg-black rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-semibold text-center">Users List</h1>
        <table className="w-full border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-500">Name</th>
              <th className="px-4 py-2 border border-gray-500">Edit</th>
              <th className="px-4 py-2 border border-gray-500">Delete</th>
              <th className="px-4 py-2 border border-gray-500">More</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td className="px-4 py-2 border border-gray-500 text-center">{user.name}</td>
                <td className="px-4 py-2 border border-gray-500 text-center">
                  <Link href={`/users/${user.age}/update`}>
                    <button className="px-2 py-1 text-white dark:text-black bg-blue-500 rounded hover:bg-blue-600">
                      Edit
                    </button>
                  </Link>
                </td>
                <td className="px-4 py-2 border border-gray-500 text-center">
                  <DeleteButton age={user.age}/>
                </td>
                <td className="px-4 py-2 border border-gray-500 text-center">
                  <Link
                    href={`/users/${user.age}`}
                    className="px-2 py-1 text-white dark:text-black bg-green-500 rounded hover:bg-green-600"
                  >
                    More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
