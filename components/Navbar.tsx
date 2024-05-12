import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-3 py-3 rounded-lg mb-5'>
      <Link className='text-white font-bold text-xl px-5' href={"/"}>Task Trove</Link>
      <Link className='bg-white dark:text-black font-semibold py-2 px-4 rounded-md' href={"/add-task"}>Add New</Link>
    </nav>
  )
}

export default Navbar