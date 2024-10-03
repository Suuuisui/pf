'use client'

import { Button } from "@/components/ui/button"
import { Twitter, Mail, Instagram } from "lucide-react"

export function SimplePortfolio() {
  // 関数を使用して新しいタブでリンクを開く
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0EAE2] text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-2">Yusuke Sugimura</h1>
      <p className="text-xl text-[#5F9EA0] mb-8">Software Engineer</p>
      <div className="flex space-x-6">
        {/* Twitter ボタン */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-[#E6DFD6]"
          onClick={() => openLink('https://twitter.com/6001_3')}
          aria-label="Twitter"
        >
          <Twitter className="h-6 w-6" />
        </Button>

        {/* Mail ボタン */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-[#E6DFD6]"
          onClick={() => openLink('mailto:ysk313tnns@gmail.com')}
          aria-label="Email"
        >
          <Mail className="h-6 w-6" />
        </Button>

        {/* Instagram ボタン */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-[#E6DFD6]"
          onClick={() => openLink('https://instagram.com/cve1862')}
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
