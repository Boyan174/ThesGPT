"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ThesisHelperPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.push("/generate-outline")
  }, [router])
  
  return (
    <div className="container mx-auto py-12 flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
} 