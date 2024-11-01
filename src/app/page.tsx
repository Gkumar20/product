

import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold text-slate-800 dark:text-slate-200 mb-10">Start Your Journey</h1>
      <div className="flex flex-row gap-4 items-ceter p-3 bg-gradient-to-br from-amber-300  to-white dark:from-amber-700 dark:to-black shadow-md shadow-amber-500">

        <Link
          href={"/products"}
          className="border border-green-400 bg-gradient-to-br from-green-300  to-white dark:from-green-700 dark:to-black px-3 py-1 rounded-md shadow-md shadow-green-500"
        >
          Product List
        </Link>
        <Link
          href={"/users"}
          className="border border-green-400 bg-gradient-to-br from-green-300  to-white dark:from-green-700 dark:to-black px-3 py-1 rounded-md shadow-md shadow-green-500"
        >
          User List
        </Link>
      </div>
    </main>
  );
}
