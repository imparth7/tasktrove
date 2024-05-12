'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const AddTask = (props: Props) => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => { return { ...prev, [name]: value } })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch(`/api/tasks`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title: formData.title, description: formData.description })
      })

      // const data = await res.json()

      if(res.ok){
        router.push('/');
      } else {
        throw new Error("Failed to create a topic")
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
      <input type="text"
        name='title'
        value={formData.title}
        onChange={(e) => handleChange(e)}
        placeholder='Task Title'
        className='border border-slate-500 bg-transparent px-8 py-2' />

      <input type="text"
        name='description'
        value={formData.description}
        onChange={(e) => handleChange(e)}
        placeholder='Task Description'
        className='border border-slate-500 bg-transparent px-8 py-2' />

      <button className='bg-gray-800 rounded-md font-bold text-white py-3 px-6 w-fit' type="submit">Add Task</button>
    </form>
  )
}

export default AddTask