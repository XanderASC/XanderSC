import Button from "@/components/Button";
import Container from "@/components/Container"
import { H1, H2, H3, P } from "@/components/defaults";
import Skill from "@/components/Skill";
import SubContainer from "@/components/SubContainer";
import Triangle from "@/components/Triangle";
import { SiCss, SiDotnet, SiElectron, SiExpress, SiFlutter, SiHtml5, SiJavascript, SiLaravel, SiMariadb, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiTypescript } from '@icons-pack/react-simple-icons';
import Image from "next/image";
import SandlotPK from "../images/SandlotPK/CourseStats.png";
import ChirperHome from "../images/Chirper/Home.png";
import MTGHome from "../images/MTG/Home.png";

export default function HomePage() {
  return <>
    <Triangle variant="top" side="left" />
    <Container className="flex justify-between place-items-end">
      <H1>
        Xander&nbsp;SC<br />
        <span className="text-midtone font-[400]">Web&nbsp;Developer</span>
      </H1>
      <Button className="text-[2rem] mb-[1.5rem]" href="/contact">Contact</Button>
    </Container>
    <Triangle variant="bottom" side="left" />
    <Container gradient>
      <SubContainer side="right" gradient>
        <H2>
          About Me
        </H2>
        <P>
          Hello! I'm Xander. I am a problem-solving oriented IT student with experience working on full-stack web applications, designing websites, managing databases, and writing complex SQL queries. I am skilled in troubleshooting technical issues and learning quickly.
        </P>
        <P>
          I am currently studying at the Nova Scotia Community College with the goal of working as a full-stack developer after graduation.
        </P>
      </SubContainer>
    </Container>
    <Triangle variant="top" side="right"/>
    <Container>
      <SubContainer>
        <H2>
          My Skills
        </H2>
        <P>
          Throughout my journey as a web developer, I have accumulated a large quantity of skills in both frontend and backend environments.
        </P>
        <H3>
          Frontend
        </H3>
        <div className="flex gap-x-8 gap-y-4 flex-wrap">
          <Skill><SiJavascript />JavaScript</Skill>
          <Skill><SiHtml5 />HTML</Skill>
          <Skill><SiCss />CSS</Skill>
          <Skill>{/* TODO: DO THIS THING*/}Responsive Design</Skill>
          <Skill><SiReact />React</Skill>
          <Skill><SiElectron />Electron</Skill>
          <Skill><SiFlutter />Flutter</Skill>
        </div>
        <H3>
          Backend
        </H3>
        <div className="flex gap-x-8 gap-y-4 flex-wrap">
          <Skill><SiNodedotjs />Node.js</Skill>
          <Skill><SiTypescript />TypeScript</Skill>
          <Skill><SiExpress />Express</Skill>
          <Skill>{/* TODO: DO THIS THING*/}Java</Skill>
          <Skill><SiPhp />PHP</Skill>
          <Skill><SiNextdotjs />Next.js</Skill>
          <Skill><SiLaravel />Laravel</Skill>
          <Skill>{/* TODO: DO THIS THING*/}C#</Skill>
          <Skill><SiDotnet />.NET</Skill>
        </div>
        <H3>
          Database
        </H3>
        <div className="flex gap-x-8 gap-y-4 flex-wrap">
          <Skill>MySQL</Skill>
          <Skill><SiMariadb />MariaDB</Skill>
          <Skill><SiMongodb />MongoDB</Skill>
          <Skill><SiPostgresql />PostgreSQL</Skill>
        </div>
        <H3>
          Soft
        </H3>
        <div className="flex gap-x-8 gap-y-4 flex-wrap">
          <Skill>Reliability</Skill>
          <Skill>Collaboration</Skill>
          <Skill>Accountability</Skill>
          <Skill>Critical Thinking</Skill>
          <Skill>Quick Learning</Skill>
          <Skill>Time Management</Skill>
          <Skill>Troubleshooting</Skill>
        </div>
      </SubContainer>
    </Container>
    <Triangle variant="bottom" side="right" />
    <Container gradient className="space-y-4">
      <H2 id="projects" className="mb-4">Highlighted Projects</H2>
      <SubContainer side="left" gradient className="overflow-hidden">
        <Image src={SandlotPK} className="mx-[-4rem] mt-[-4rem] min-w-[calc(100%+8.25rem)]" alt="Sandlot Parkour" />
        <div className="flex justify-between items-center">
          <H3>SandlotPK</H3>
          <div className="flex gap-4 mt-1 items-start">
            <Skill small><SiReact />React</Skill>
            <Skill small><SiPostgresql />PostgreSQL</Skill>
            <Skill small><SiTypescript />TypeScript</Skill>
          </div>
        </div>
        <P>SandlotPK is a full-stack application that serves dynamic data to the user with automatically generated graphs and statistics.</P>
        <P>Created as a personal challenge, my goal for this application was to see if I was capable of completing an entire full-stack website within a month's time and zero use of AI.</P>
        <P>Through excellent problem-solving and rapid learning, I managed to teach myself TypeScript and PostgreSQL and build the application from the ground up within 31 days.</P>
        <Button href="/sandlotpk">See more</Button>
      </SubContainer>
    </Container>
    <Triangle variant="top" side="left"/>
    <Container>
      <SubContainer side="center" className="overflow-hidden">
        <Image src={ChirperHome} className="mx-[-4rem] mt-[-4rem] min-w-[calc(100%+8.25rem)]" alt="Sandlot Parkour" />
        <div className="flex justify-between items-center">
          <H3>Chirper</H3>
          <div className="flex gap-4 mt-1 items-start">
            <Skill small><SiPhp />PHP</Skill>
            <Skill small><SiLaravel />Laravel</Skill>
            <Skill small><SiJavascript />JavaScript</Skill>
          </div>
        </div>
        <P>Chirper is a basic Twitter clone that utilizes the Laravel framework to manage both the frontend and backend of the application within a single project.</P>
        <P>This project stars many key features in current-day applications—authentication, advanced search filtering, bookmarking, and more!</P>
        <Button href="/sandlotpk">See more</Button>
      </SubContainer>
    </Container>
    <Triangle variant="bottom" side="left"/>
    <Container gradient className="pb-[4rem]">
      <SubContainer side="right" gradient className="overflow-hidden">
        <Image src={MTGHome} className="mx-[-4rem] mt-[-4rem] min-w-[calc(100%+8.25rem)]" alt="Sandlot Parkour" />
        <div className="flex justify-between items-center">
          <H3>MTG Cards</H3>
          <div className="flex gap-4 mt-1 items-start">
            <Skill small><SiExpress />Express</Skill>
            <Skill small><SiReact />React</Skill>
            <Skill small><SiMongodb />MongoDB</Skill>
          </div>
        </div>
        <P>MTG Cards is a full-stack application that makes use of Express and MongoDB to provide dynamically generated Magic: the Gathering card data to the browser.</P>
        <P>The frontend of the application was created using React, and features various components such as CRUD functionality and user authentication via custom-implemented JSON web tokens.</P>
        <Button href="/sandlotpk">See more</Button>
      </SubContainer>
    </Container>
  </>;
}
