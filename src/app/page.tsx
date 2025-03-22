'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3001/api')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl text-mint-500 font-bold underline">{message}</h1>
    </div>
  )
}
