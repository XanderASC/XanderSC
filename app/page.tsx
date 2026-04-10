import Button from "@/components/Button";
import Container from "@/components/Container"
import { H1, H2, H3, P } from "@/components/defaults";
import Skill from "@/components/Skill";
import SubContainer from "@/components/SubContainer";
import Triangle from "@/components/Triangle";
import { SiCss, SiDotnet, SiElectron, SiExpress, SiFlutter, SiHtml5, SiJavascript, SiLaravel, SiMariadb, SiMongodb, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiStripe, SiSupabase, SiTailwindcss, SiTypescript } from '@icons-pack/react-simple-icons';
import Image from "next/image";
import SandlotPK from "../images/SandlotPK/CourseStats.png";
import EditProfile from "../images/NSCC-ITK/EditProfile.png";
import Home from "../images/Xander-SC/Home.png";

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
          Hello! I’m Xander. I am a problem-solving oriented IT student with experience working on full-stack web applications, designing websites, managing databases, and writing complex SQL queries. I am skilled in troubleshooting technical issues and learning quickly.
        </P>
        <P>
          I am currently studying at the Nova Scotia Community College, and am eager for a position that would challenge me to expand upon my knowledge and expertise as a web developer and IT generalist.
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
          <Skill><SiReact />React</Skill>
          <Skill><SiElectron />Electron</Skill>
          <Skill><SiFlutter />Flutter</Skill>
          <Skill><SiTailwindcss />TailwindCSS</Skill>
        </div>
        <H3>
          Backend
        </H3>
        <div className="flex gap-x-8 gap-y-4 flex-wrap">
          <Skill><SiNodedotjs />Node.js</Skill>
          <Skill><SiTypescript />TypeScript</Skill>
          <Skill><SiExpress />Express</Skill>
          <Skill>Java</Skill>
          <Skill><SiPhp />PHP</Skill>
          <Skill><SiNextdotjs />Next.js</Skill>
          <Skill><SiLaravel />Laravel</Skill>
          <Skill>C#</Skill>
          <Skill><SiDotnet />.NET</Skill>
          <Skill><SiSupabase />Supabase</Skill>
          <Skill><SiStripe />Stripe</Skill>
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
          <Skill>Responsive Design</Skill>
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
          <H3>Sandlot&nbsp;PK</H3>
          <div className="flex gap-4 mt-1 items-start">
            <Skill small><SiReact />React</Skill>
            <Skill small><SiPostgresql />PostgreSQL</Skill>
            <Skill small><SiTypescript />TypeScript</Skill>
          </div>
        </div>
        <P>Sandlot&nbsp;PK is a full-stack application that serves dynamic data to the user with automatically generated graphs and statistics.</P>
        <P>Created as a personal challenge, my goal for this application was to see if I was capable of completing an entire full-stack website within a month’s time and zero use of AI.</P>
        <P>Through excellent problem-solving and rapid learning, I managed to teach myself TypeScript and PostgreSQL and build the application from the ground up within 31 days.</P>
        <Button href="/projects/sandlotpk#top">See more</Button>
      </SubContainer>
    </Container>
    <Triangle variant="top" side="left"/>
    <Container>
      <SubContainer side="right" className="overflow-hidden">
        <Image src={EditProfile} className="mx-[-4rem] mt-[-4rem] min-w-[calc(100%+8.25rem)]" alt="Sandlot Parkour" />
        <div className="flex justify-between items-center">
          <H3>NSCC ITK</H3>
          <div className="flex gap-4 mt-1 items-start">
            <Skill small><SiNextdotjs />Next.js</Skill>
            <Skill small><SiSupabase />Supabase</Skill>
            <Skill small><SiStripe />Stripe</Skill>
          </div>
        </div>
        <P>NSCC In The Know is a SaaS application that allows NSCC students to customize their profiles, list and find projects to collaborate on, and connect via the website.</P>
        <P>This was a collaborative project with the help of two classmates. I was responsible for implementing key features such as user authentication, route gating, database migrations for local development, and payment processing.</P>
        <Button href="/projects/nscc-itk#top">See more</Button>
      </SubContainer>
    </Container>
    <Triangle variant="bottom" side="right"/>
    <Container gradient className="pb-[4rem] flex-1">
      <SubContainer side="left" gradient className="overflow-hidden">
        <Image src={Home} className="mx-[-4rem] mt-[-4rem] min-w-[calc(100%+8.25rem)]" alt="Sandlot Parkour" />
        <div className="flex justify-between items-center">
          <H3>Xander SC</H3>
          <div className="flex gap-4 mt-1 items-start">
            <Skill small><SiNextdotjs />Next.js</Skill>
            <Skill small><SiTailwindcss />TailwindCSS</Skill>
            <Skill small><SiTypescript />TypeScript</Skill>
          </div>
        </div>
        <P>Xander SC is my custom-built personal portfolio website. This is a fully-responsive site that utilizes unorthodox design choices to create an eye-catching interface.</P>
        <P>Xander SC is powered by Next.js and TailwindCSS, and was created as a direct upgrade to an older portfolio website of mine. This edition introduces an improved colour scheme and the superior user-experience that comes with a React powered single page application while maintaining the search engine optimization required to keep the site visible.</P>
        <Button href="/projects/xander-sc#top">See more</Button>
      </SubContainer>
    </Container>
  </>;
}
