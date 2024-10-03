'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Twitter, Mail, Instagram } from "lucide-react"

export function SimplePortfolio() {
  // 散らばり状態を管理するためのステート
  const [isScattered, setIsScattered] = useState(false);

  // 関数に型を付ける（url は string 型）
  const openLink = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 名前がクリックされたときに散らばる
  const handleNameClick = () => {
    if (!isScattered) {
      setIsScattered(true);
    }
  };

  // 名前を一文字ずつ分割
  const name = "Yusuke Sugimura";
  const nameCharacters = name.split("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0EAE2] text-gray-800 p-4">
      {/* 名前をクリック可能にし、散らばり状態に応じてクラスを変更 */}
      <h1 
        className={`text-4xl font-bold mb-2 cursor-pointer select-none flex flex-wrap justify-center ${
          isScattered ? 'scatter' : ''
        }`}
        onClick={handleNameClick}
      >
        {nameCharacters.map((char, index) => (
          <span 
            key={index} 
            className={`inline-block transition-transform duration-700 ${
              isScattered ? `scatter-item delay-${index}` : ''
            }`}
          >
            {char}
          </span>
        ))}
      </h1>
      
      <p className="text-xl text-[#5F9EA0] mb-8">Software Engineer</p>
      <div className="flex space-x-6">
        {/* Twitter アイコン */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-[#E6DFD6]"
          onClick={() => openLink('https://twitter.com/6001_3')}
          aria-label="Twitter"
        >
          <Twitter className="h-6 w-6" />
        </Button>

        {/* Mail アイコン */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-[#E6DFD6]"
          onClick={() => openLink('mailto:ysk313tnns@gmail.com')}
          aria-label="Email"
        >
          <Mail className="h-6 w-6" />
        </Button>

        {/* Instagram アイコン */}
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

