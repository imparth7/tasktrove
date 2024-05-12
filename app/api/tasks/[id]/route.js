import { NextResponse } from 'next/server';
import Task from './../../../../models/task';
import connectMongoDB from './../../../../libs/mongodb';


export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();

  await connectMongoDB()
  await Task.findByIdAndUpdate(id, { title, description })

  return NextResponse.json({ message: "Task Updated" }, { status: 200 })
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB()
  const task = await Task.findOne({ _id: id })

  return NextResponse.json({ task }, { status: 200 })
}