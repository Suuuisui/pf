"'use client'"

import { Button } from "@/components/ui/button"
import { Twitter, Mail, Instagram } from "lucide-react"

export function SimplePortfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0EAE2] text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-2">Yusuke Sugimura</h1>
      <p className="text-xl text-[#5F9EA0] mb-8">Software Engineer</p>
      <div className="flex space-x-6">
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#E6DFD6]">
          <Twitter className="h-6 w-6" />
          <span className="sr-only">Twitter</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#E6DFD6]">
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#E6DFD6]">
          <Instagram className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </Button>
      </div>
    </div>
  )
}