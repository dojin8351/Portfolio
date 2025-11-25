import ProfileAvatar from "@/components/ProfileAvatar";
import {AboutMeType} from "@/types/aboutMe";
import EmailClipboardButton from "@/components/EmailClipboardButton";
import GitHubLinkButton from "@/components/GitHubLinkButton";
interface AboutMeProps {
  aboutMeInfo : AboutMeType
}

export default function AboutMeSection({aboutMeInfo} : AboutMeProps) {
  return(
  <div className={'flex flex-col w-full'}>
    <div className={'flex flex-col items-center sm:flex-row sm:items-center gap-6 sm:gap-10 w-full'}>
      <ProfileAvatar src={aboutMeInfo?.src} />
      <div className={'flex flex-col font-semibold dark:text-white gap-2 w-full sm:w-auto'}>
        <h1 className={'text-xl sm:text-2xl md:text-h1 leading-tight break-words'}>
          <span>안녕하세요,</span>{' '}
          <span className={'sm:whitespace-nowrap'}>
            <span>{aboutMeInfo?.job}</span>{' '}
            <span>개발자</span>{' '}
            <span className={'text-blue-400'}>{aboutMeInfo?.name}</span>
            <span>입니다.</span>
          </span>
        </h1>
        <div className={'flex flex-row gap-1 flex-wrap'}>
          <EmailClipboardButton email={aboutMeInfo?.email}/>
          <GitHubLinkButton githubLink={aboutMeInfo?.githubLink}/>
        </div>
      </div>
    </div>
    <ul className={'mt-6 sm:mt-8 space-y-2 text-gray-700 dark:text-gray-400 text-sm sm:text-base w-full'}>
      {aboutMeInfo?.introductions?.map((intro, index) => (
        <li key={index} className={'break-words'}>• {intro}</li>
      ))}
    </ul>
  </div>)
}