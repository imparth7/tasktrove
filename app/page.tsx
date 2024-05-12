'use client'

import React, { useEffect, useState } from 'react'
import TaskList from "@/components/TaskList";
import { Task } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const [data, setData] = useState<Task[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await fetch('/api/tasks');
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to fetch Tasks")
      }
      setData(data.tasks)

    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id: String) => {

    let confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/tasks?id=${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
    }
  }

  return (
    <>
      {data.map((item: Task) => {
        let key = item._id
        return <TaskList key={key.toString()} taskData={item} handleDelete={() => handleDelete(key)} />
      })}

      {data.length === 0 &&
        <>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src={'/empty-area.png'}
              width={500} height={450}
              className='dark:invert'
              alt='No task found !!!' />
            <h2 className='font-bold text-lg'>Add some task here...</h2>
            <Link
              href="/add-task"
              className='text-white bg-black hover:bg-stone-900 focus:outline-none focus:ring-4 focus:ring-neutral-800 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-black dark:bg-white dark:hover:bg-slate-400 dark:focus:ring-slate-400 dark:border-slate-400'
            >Add Task</Link>
          </div>
        </>
      }
    </>
  )
}
