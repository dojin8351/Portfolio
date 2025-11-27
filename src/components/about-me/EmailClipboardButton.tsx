"use client"

import { toast } from "sonner"
import Image from "next/image"

interface EmailClipboardButtonProps {
  email: string
}

export default function EmailClipboardButton({
  email,
}: EmailClipboardButtonProps) {
  const copy = () => {
    navigator.clipboard.writeText(email)
    toast.success("이메일이 복사되었습니다.")
  }

  return (
    <button
      onClick={copy}
      className={
        "flex cursor-pointer flex-row items-center gap-1 rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
      }
      suppressHydrationWarning
    >
      <Image
        src={"/logos/google.svg"}
        alt="Google Logo"
        width={15}
        height={15}
      />
      <p>email</p>
    </button>
  )
}
