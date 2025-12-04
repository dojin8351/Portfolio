import ProfileAvatar from "@/components/about-me/ProfileAvatar"
import { AboutMeType } from "@/types/aboutMe"
import EmailClipboardButton from "@/components/about-me/EmailClipboardButton"
import GitHubLinkButton from "@/components/about-me/GitHubLinkButton"
import SectionLayout from "@/components/layouts/SectionLayout"
import dynamic from "next/dynamic"

const AchievementTimeline = dynamic(
  () => import("@/components/about-me/AchievementTimeline")
)
interface AboutMeProps {
  aboutMeInfo: AboutMeType
}

export default function AboutMeSection({ aboutMeInfo }: AboutMeProps) {
  return (
    <SectionLayout sectionId="about-me">
      <div
        className={
          "flex w-full flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4 md:gap-6 lg:gap-10"
        }
      >
        <ProfileAvatar src={aboutMeInfo?.profileImg} />
        <div
          className={
            "flex w-full flex-col gap-2 font-semibold sm:w-auto dark:text-white"
          }
        >
          <h1
            className={
              "wrap-break-words md:text-h1 text-lg leading-tight sm:text-xl md:text-2xl"
            }
          >
            <span>안녕하세요,</span>{" "}
            <span className={"inline-block sm:inline"}>
              <span className={"text-green-400"}>
                &#34;나중보다 지금 더 일하는&#34;
              </span>{" "}
              <span>{aboutMeInfo?.job}</span> <span>개발자</span>{" "}
              <span className={"text-blue-400"}>{aboutMeInfo?.name}</span>
              <span>입니다.</span>
            </span>
          </h1>
          <div className={"flex flex-row flex-wrap gap-1"}>
            <EmailClipboardButton email={aboutMeInfo?.email} />
            <GitHubLinkButton githubLink={aboutMeInfo?.githubLink} />
          </div>
        </div>
      </div>
      <ul
        className={
          "mt-4 w-full space-y-2 text-xs text-gray-700 sm:mt-6 sm:text-sm md:mt-8 md:text-base dark:text-gray-400"
        }
      >
        {aboutMeInfo?.introductions?.map((intro, index) => (
          <li key={index} className={"break-words"}>
            • {intro}
          </li>
        ))}
      </ul>
      {aboutMeInfo?.achievements && (
        <AchievementTimeline achievements={aboutMeInfo.achievements} />
      )}
    </SectionLayout>
  )
}
