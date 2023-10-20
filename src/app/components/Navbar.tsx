import { Category } from "@/types/types"
import Image from "next/image"
import Link from "next/link"


async function getData() {
    const res = await fetch('http://localhost:3000/api/categories')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Navbar() {
    const data:Category = await getData()
   
    return <main className="flex justify-center">
      <div className=' '>
        <h1 className=' uppercase font-semibold text-xl'>Popular Categories</h1>
        <div className='flex gap-2 flex-wrap'>
          {data?.map((item) => (
            <Link
              href="/blog?cat=style"
              className='flex p-4 border-2 rounded-md gap-1'
              key={item._id}
            >
              {item.img && (
                <Image
                  src='/next.svg'
                  alt=""
                  width={32}
                  height={32}
                  className={''}
                />
              )}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  }