import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function Header() {
  return (
    <div className={'flex flex-row bg-[#FAFAF9] dark:bg-dark w-full border-black h-14 sm:h-16 justify-between items-center px-4 sm:px-5'}>
      <p className={'text-lg sm:text-h3 font-semibold antialiased dark:text-white'}>Portfolio</p>
      <div className={'flex flex-row gap-2 sm:gap-5 justify-between items-center'}>
        <div className={'hidden sm:flex flex-row gap-3 sm:gap-5 font-medium dark:text-white'}>
          <p className={'cursor-pointer hover:text-blue-500 text-sm sm:text-base'}>자기소개</p>
          <p className={'cursor-pointer hover:text-blue-500 text-sm sm:text-base'}>역량</p>
          <p className={'cursor-pointer hover:text-blue-500 text-sm sm:text-base'}>기술</p>
          <p className={'cursor-pointer hover:text-blue-500 text-sm sm:text-base'}>프로젝트</p>
        </div>
        <div>
          <ThemeToggleButton/>
        </div>
      </div>
    </div>
  )
}