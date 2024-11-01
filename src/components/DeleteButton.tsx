'use client'

export default function DeleteButton({age}:{age:number}) {
  async function handleDelete(age: number) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/users/`+age,{
      method:"DELETE"
    })
    const data = await  response.json()
    if(data.success){
      alert(age+" : user Deleted Successfully")
    }
  }
  return (
    <button
      onClick={() => handleDelete(age)}
      className="px-2 py-1 text-white dark:text-black bg-red-500 rounded hover:bg-red-600">
      Delete
    </button>
  )
}
