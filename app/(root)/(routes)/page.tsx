import SearchInput from '@/components/search-input'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-full space-y-2 p-4'>
      <SearchInput></SearchInput>
    </div>
  )
}
