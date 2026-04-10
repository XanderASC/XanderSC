import Container from "@/components/Container";
import { H1, H2, P, UL } from "@/components/defaults";
import Skill from "@/components/Skill";
import Triangle from "@/components/Triangle";
import { SiExpress, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";
import { Carousel, Slide } from "@/components/Carousel";
import SubContainer from "@/components/SubContainer";
import About from "@/images/SandlotPK/About.png";
import Courses from "@/images/SandlotPK/Courses.png";
import CourseStats from "@/images/SandlotPK/CourseStats.png";
import Players from "@/images/SandlotPK/Players.png";
import PlayerStatsByCourse from "@/images/SandlotPK/PlayerStatsByCourse.png";
import Image from "next/image";

export default function SandlotPKPage() {
  return <>
    <Triangle variant="top" side="left"/>
    <Container className="space-y-4">
      <div className="md:flex gap-4 justify-between items-center">
        <H1>
          Sandlot&nbsp;PK
        </H1>
        <div className="flex gap-2 md:gap-4 mt-1 items-start flex-wrap md:justify-end">
          <Skill small><SiPostgresql />PostgreSQL</Skill>
          <Skill small><SiExpress />Express</Skill>
          <Skill small><SiReact />React</Skill>
          <Skill small><SiTailwindcss />TailwindCSS</Skill>
          <Skill small><SiTypescript />TypeScript</Skill>
        </div>
      </div>
      <Carousel
        githubUrl="https://github.com/Firepyth/SandlotParkourApp"
        liveUrl="https://sandlotparkourapp.onrender.com"
      >
        <Slide>
          <Image src={About} alt="Sandlot PK About" />
        </Slide>
        <Slide>
          <Image src={Courses} alt="Sandlot PK Courses" />
        </Slide>
        <Slide>
          <Image src={CourseStats} alt="Sandlot PK Course Stats" />
        </Slide>
        <Slide>
          <Image src={Players} alt="Sandlot PK Players" />
        </Slide>
        <Slide>
          <Image src={PlayerStatsByCourse} alt="Sandlot PK Player Stats by Course" />
        </Slide>
      </Carousel>
    </Container>
    <Triangle variant="bottom" side="left"/>
    <Container gradient>
      <SubContainer gradient side="right">
        <H2>Problem</H2>
        <P>
          The Sandlot is a server for the video game known as Minecraft. Within it, there is another game where players can set times on difficult obstacle courses. This game has two major inefficiencies:
        </P>
        <UL>
          <li>There is no way to easily tell which obstacle courses a player has yet to complete</li>
          <li>There is no way for players to see the average times on a course.</li>
        </UL>
        <P>
          The former is a wildly time-consuming problem, sometimes taking up to an hour to find out which courses a player hasn’t completed. The latter would be useful so that players can estimate the time investment required to play a course before doing so.
        </P>
      </SubContainer>
    </Container>
    <Triangle variant="top" side="right"/>
    <Container>
      <SubContainer side="left">
        <H2>Development Process</H2>
        <P>To go about resolving these issues, I contacted the owner of the Minecraft server and received a copy of the obstacle course database.</P>
        <P>I taught myself TypeScript, PostgreSQL, and Prisma ORM so that I could build a strictly-typed and efficient Express API to serve data to my frontend. The frontend was a React and Tailwind CSS web app built to fix these key flaws and provide other useful statistics for users to see.</P>
        <P>I was working on this project during my winter break between College semesters, leaving me with a rather tight window for development. Despite this, I managed to complete it 31 days after its inception.</P>
        <P>I put extra focus in making the website as easy to use while also being completely accessible for keyboard-only users. I deployed the site on Render.com with plans to move it to a more permanent hosting platform in the future.</P>
      </SubContainer>
    </Container>
    <Triangle variant="bottom" side="left"/>
    <Container gradient className="pb-[4rem]">
      <SubContainer gradient side="right">
        <H2>Result</H2>
        <P>The completed web application solves both issues that I had found: players can now easily view the courses that they haven’t completed, and average completion times are accessible for all courses.</P>
        <P>The website is also completely responsive for all screen sizes, offering different functionality for mobile devices compared to computers for greater accessibility. I succeeded in making all interactive elements keyboard navigable while also automatically focusing on the most important elements to make the process more intuitive and painless.</P>
      </SubContainer>
    </Container>
  </>;
}