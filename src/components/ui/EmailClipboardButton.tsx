'use client'

import {Mail} from "lucide-react";
import {toast} from "sonner";

interface EmailClipboardButtonProps {
  email : string
}

export default function EmailClipboardButton({email}: EmailClipboardButtonProps) {
  const copy = () => {
    navigator.clipboard.writeText(email)
    toast.success("이메일이 복사되었습니다.")
  }
  
  return (
    <button 
      onClick={copy} 
      className={'animate-bounce text-md font-medium bg-gray-200 px-1.5 py-0.5 rounded-full text-gray-600 dark:text-white dark:bg-gray-700 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 flex flex-row items-center gap-1'}
      suppressHydrationWarning
    >
      <Mail size={20}/>
    </button>
  );
}