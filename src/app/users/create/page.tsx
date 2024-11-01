'use client'

import { useState } from "react"

export default function UsersCreate() {

    const [user, setUser] = useState({
        name:"",
        email:"",
        age:0
    })

    const handleSubmit = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/users`,{
            method:"POST",
            body:JSON.stringify(user)
        })
        const result = await response.json()
        if(result.success){
            alert("New User Created")
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div
                className="w-full max-w-md p-6 bg-white dark:bg-black rounded-lg shadow-md"
            >
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">
                    User Information Form
                </h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={(e)=>setUser({...user, name:e.target.value})}
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 bg-transparent  focus:ring-indigo-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={(e)=>setUser({...user, email:e.target.value})}
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 bg-transparent  focus:ring-indigo-600"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="age">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={user.age}
                        onChange={(e)=>setUser({...user, age:parseInt(e.target.value)})}
                        required
                        className="w-full bg-transparent px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 "
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full py-2 text-white  rounded-md bg-gradient-to-br from-blue-500  to-white dark:to-black px-3  font-bold hover:from-violet-700 "
                >
                    Submit
                </button>
            </div>
        </div>

    )
}
