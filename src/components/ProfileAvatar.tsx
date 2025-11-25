import Image from "next/image";

interface ProfileAvatarProps {
  src: string;
}

export default function ProfileAvatar({src} : ProfileAvatarProps) {
  return (
    <div className={'relative w-32 h-32 sm:w-40 sm:h-40 shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700'}>
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