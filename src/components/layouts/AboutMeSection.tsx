import ProfileAvatar from "@/components/about-me/ProfileAvatar"
import { AboutMeType } from "@/types/aboutMe"
import EmailClipboardButton from "@/components/about-me/EmailClipboardButton"
import GitHubLinkButton from "@/components/about-me/GitHubLinkButton"
import AchievementTimeline from "@/components/about-me/AchievementTimeline"
import dynamic from "next/dynamic"
import SectionLayout from "@/components/layouts/SectionLayout"

const FadeInSection = dynamic(
  () => import("@/components/layouts/FadeInSection")
)
interface AboutMeProps {
  aboutMeInfo: AboutMeType
}

export default function AboutMeSection({ aboutMeInfo }: AboutMeProps) {
  return (
    <FadeInSection>
      <SectionLayout sectionId="about-me">
        <div
          className={
            "flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6 md:gap-10"
          }
        >
          <ProfileAvatar src={aboutMeInfo?.src} />
          <div
            className={
              "flex w-full flex-col gap-2 font-semibold sm:w-auto dark:text-white"
            }
          >
            <h1
              className={
                "md:text-h1 text-xl leading-tight break-words sm:text-2xl"
              }
            >
              <span>안녕하세요,</span>{" "}
              <span className={"inline-block sm:inline"}>
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
            "mt-6 w-full space-y-2 text-sm text-gray-700 sm:mt-8 sm:text-base dark:text-gray-400"
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
    </FadeInSection>
  )
}
