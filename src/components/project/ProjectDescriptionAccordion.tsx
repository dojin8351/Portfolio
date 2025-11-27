import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {ProjectDescription} from "@/types/project";

interface ProjectDescriptionAccordionProps {
  projectDescription: ProjectDescription[]
}

export default function ProjectDescriptionAccordion({projectDescription}: ProjectDescriptionAccordionProps) {
  return (
    <Accordion type={"multiple"} className={'w-full'}>
      {projectDescription.map(description => (
        <AccordionItem key={description.id} value={description.id.toString()}>
          <AccordionTrigger className={'cursor-pointer'}>{description.title}</AccordionTrigger>
          <AccordionContent>{description.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
