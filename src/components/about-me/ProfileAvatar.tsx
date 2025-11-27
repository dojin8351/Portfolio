import Image from "next/image"

interface ProfileAvatarProps {
  src: string
}

export default function ProfileAvatar({ src }: ProfileAvatarProps) {
  return (
    <div
      className={
        "relative hidden h-28 w-28 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:flex sm:h-36 sm:w-36 md:h-40 md:w-40 dark:bg-gray-700"
      }
    >
      <Image
        src={src}
        alt="Profile"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 128px, 160px"
        priority
      />
    </div>
  )
}
