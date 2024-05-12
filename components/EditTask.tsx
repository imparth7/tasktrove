'use client'

import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const EditTask = () => {

  const router = useRouter();
  const params = useParams()
  const { id } = params

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })

  useEffect(() => {
    return () => {
      getTaskData()
    }
  }, )

  const getTaskData = async () => {
    const res = await fetch(`/api/tasks/${id}`);
    const data = await res.json()
    setFormData(data.task)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => { return { ...prev, [name]: value } })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle: formData.title, newDescription: formData.description })
      })

      const data = await res.json()
      console.log(data);
      router.push('/');

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

      <button className='bg-gray-800 rounded-md font-bold text-white py-3 px-6 w-fit' type="submit">Update Task</button>
    </form>
  )
}

export default EditTask