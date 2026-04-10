import Container from "@/components/Container";
import { H1, H2, P } from "@/components/defaults";
import Skill from "@/components/Skill";
import Triangle from "@/components/Triangle";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";
import { Carousel, Slide } from "@/components/Carousel";
import SubContainer from "@/components/SubContainer";
import Home from "@/images/Xander-SC/Home.png";
import Contact from "@/images/Xander-SC/Contact.png";
import Project from "@/images/Xander-SC/Project.png";
import Image from "next/image";

export default function XanderSCPage() {
  return <>
    <Triangle variant="top" side="left"/>
    <Container className="space-y-4">
      <div className="flex gap-4 justify-between items-center">
        <H1>
          Xander&nbsp;SC
        </H1>
        <div className="flex gap-4 mt-1 items-start flex-wrap justify-end">
          <Skill small><SiReact />React</Skill>
          <Skill small><SiTailwindcss />TailwindCSS</Skill>
          <Skill small><SiNextdotjs />Next.js</Skill>
          <Skill small><SiTypescript />TypeScript</Skill>
        </div>
      </div>
      <Carousel
        githubUrl="https://github.com/XanderASC/XanderSC"
      >
        <Slide>
          <Image src={Home} alt="XanderSC Home" />
        </Slide>
        <Slide>
          <Image src={Contact} alt="XanderSC Contact" />
        </Slide>
        <Slide>
          <Image src={Project} alt="XanderSC Project" />
        </Slide>
      </Carousel>
    </Container>
    <Triangle variant="bottom" side="left"/>
    <Container gradient>
      <SubContainer gradient side="right">
        <H2>Problem</H2>
        <P>As a web developer, I was in dire need of a portfolio. And not just any portfolio at that, mine had to be a custom-built website portfolio that was made to showcase my development skills.</P>
        <P>I was on a tight clock of around ten days to build the site for myself, with my goal being a unique and eye-catching design that sets itself apart from the others.</P>
      </SubContainer>
    </Container>
    <Triangle variant="top" side="right"/>
    <Container>
      <SubContainer side="left">
        <H2>Development Process</H2>
        <P>I had previously created a portfolio website for myself before, though it was very outdated. I decided the best approach would be to completely rebuild it from scratch using the newest technology that I had learned—Next.js.</P>
        <P>I began the development process by refining my colour choices for the site, planning out the layout, and then creating the various required routes. I chose to use a rather unorthodox style featuring many diagonal lines—something rarely seen given the web’s blocky nature.</P>
        <P>I used Web3Forms to create a contact form, Embla for image carousels, and a large number of custom-styled components that were tailored to fit my needs exactly.</P>
      </SubContainer>
    </Container>
    <Triangle variant="bottom" side="left"/>
    <Container gradient className="pb-[4rem]">
      <SubContainer gradient side="right">
        <H2>Result</H2>
        <P>As a result, the newly created portfolio site was far superior to its previous rendition, featuring dedicated pages for each project, a more user-friendly layout, and a development environment that will be much more manageable in the future.</P>
        <P>This project was a testament to my development speed, and I hope to be developing it further and making new additions for years to come.</P>
      </SubContainer>
    </Container>
  </>;
}