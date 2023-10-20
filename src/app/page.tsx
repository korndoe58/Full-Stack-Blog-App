import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <main >
      <Navbar/>
      <span>page{page}</span>
    </main>
  )
}
