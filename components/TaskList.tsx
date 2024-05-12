'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { Task } from '@/types'

type Props = {
  taskData: Task
  handleDelete: any
}

const TaskList = ({ taskData: { title, description, _id }, handleDelete }: Props) => {

  return (
    <>
      <div className='p-4 border border-slate-300 dark:border-neutral-800 flex justify-between gap-5 my-3'>
        <div className='w-full'>
          <h2 className='font-bold text-2xl'>{title}</h2>
          <p>{description}</p>
        </div>

        <div className='flex gap-2 items-start'>
          <Link href={`/edit-task/${_id}`}>
            <Icon icon={`carbon:edit`} fontSize={22} color='darkgreen' />
          </Link>
          <button onClick={handleDelete}>
            <Icon icon={`carbon:trash-can`} fontSize={22} color='brown' />
          </button>
        </div>
      </div>
    </>
  )
}

export default TaskList