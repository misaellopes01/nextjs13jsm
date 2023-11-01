'use client'
import Image from 'next/image'
import { Input } from './ui/input'
import { useState } from 'react'

export default function SearchForm() {
  const [search, setSearch] = useState<string>('')

  return (
    <form className="flex-center mx-auto mt-10 2-full sm:-mt-10 sm:px-5">
      <label htmlFor="" className="flex-center relative w-full max-w-3xl">
        <Image
          src={'./magnifying-glass.svg'}
          className="absolute left-8"
          width={32}
          height={32}
          alt="Search icon"
        />
        <Input
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
          type="text"
          placeholder="Search for something..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>
    </form>
  )
}
