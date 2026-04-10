import Container from "@/components/Container";
import { H1, H2, P } from "@/components/defaults";
import Skill from "@/components/Skill";
import Triangle from "@/components/Triangle";
import { SiNextdotjs, SiPostgresql, SiStripe, SiSupabase, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";
import { Carousel, Slide } from "@/components/Carousel";
import SubContainer from "@/components/SubContainer";
import EditProfile from "@/images/NSCC-ITK/EditProfile.png";
import MyProjects from "@/images/NSCC-ITK/MyProjects.png";
import ProjectDetails from "@/images/NSCC-ITK/ProjectDetails.png";
import Projects from "@/images/NSCC-ITK/Projects.png";
import PublicProfile from "@/images/NSCC-ITK/PublicProfile.png";
import ResetPassword from "@/images/NSCC-ITK/ResetPassword.png";
import Signup from "@/images/NSCC-ITK/Signup.png";
import Image from "next/image";

export default function NSCCITKPage() {
  return <>
    <Triangle variant="top" side="left"/>
    <Container className="space-y-4">
      <div className="md:flex gap-4 justify-between items-center">
        <H1>
          NSCC&nbsp;ITK
        </H1>
        <div className="flex gap-2 md:gap-4 mt-1 items-start flex-wrap md:justify-end">
          <Skill small><SiPostgresql />PostgreSQL</Skill>
          <Skill small><SiTailwindcss />TailwindCSS</Skill>
          <Skill small><SiTypescript />TypeScript</Skill>
          <Skill small><SiNextdotjs />Next.js</Skill>
          <Skill small><SiSupabase />Supabase</Skill>
          <Skill small><SiStripe />Stripe</Skill>
        </div>
      </div>
      <Carousel
        liveUrl="http://project-nscc-in-the-know.vercel.app"
      >
        <Slide>
          <Image src={EditProfile} alt="NSCC In The Know Edit profile" />
        </Slide>
        <Slide>
          <Image src={MyProjects} alt="NSCC In The Know My projects" />
        </Slide>
        <Slide>
          <Image src={ProjectDetails} alt="NSCC In The Know Project details" />
        </Slide>
        <Slide>
          <Image src={Projects} alt="NSCC In The Know Project listing" />
        </Slide>
        <Slide>
          <Image src={PublicProfile} alt="NSCC In The Know Public profile" />
        </Slide>
        <Slide>
          <Image src={Signup} alt="NSCC In The Know Signup" />
        </Slide>
        <Slide>
          <Image src={ResetPassword} alt="NSCC In The Know Reset password" />
        </Slide>
      </Carousel>
    </Container>
    <Triangle variant="bottom" side="left"/>
    <Container gradient>
      <SubContainer gradient side="right">
        <H2>Problem</H2>
        <P>As NSCC students, many of my classmates and I have come up with project ideas that may require the help and skills of someone outside of our field. I imagine the same is true, if not even more so, for students outside of the IT industry.</P>
        <P>The difficulty lies in connecting with others who have similar interests who also have the skills that match what is required for the project. Currently, there is no easy way for students to group up with others across programs to work on side projects that they are passionate about, and I think this reason I have identified is responsible. NSCC In The Know is an application built to solve this exact problem.</P>
      </SubContainer>
    </Container>
    <Triangle variant="top" side="right"/>
    <Container>
      <SubContainer side="left">
        <H2>Development Process</H2>
        <P>This project was a collaborative effort with two of my classmates and myself as the maintainer/project lead. As the maintainer, I was responsible for keeping everyone organized, making sure we are on-schedule, and assigning work to the other members.</P>
        <P>We began the process by thoroughly discussing our plan, taking notes on design implementation and working through all foreseen problems as early as possible. Then, it was time to get to work.</P>
        <P>NSCC In the Know had a large scope, requiring features such as user authentication, route gating, freemium/premium + payment processing, and an admin dashboard. As it happens, I was the one responsible for implementing all of these features listed.</P>
        <P>The backbone of the project was built using Next.js, and I utilized Supabase to handle user authentication. Payment processing was done via Stripe, and the admin dashboard was created using complex and secure PostgreSQL queries and Next route gating.</P>
      </SubContainer>
    </Container>
    <Triangle variant="bottom" side="left"/>
    <Container gradient className="pb-[4rem]">
      <SubContainer gradient side="right">
        <H2>Result</H2>
        <P>Within around a month and a half, we managed to finish the project, having met our minimum-viable product goals.</P>
        <P>In the completed project, users are able to sign up, customize their profile, and create, list, and join projects of their choosing. Advanced filtering options exist for projects, public profiles are visible for users, and AI-powered project recommendations are available with the premium subscription.</P>
        <P>This was by far the most difficult collaborative experience that I have had thus far, while also being one of the most rewarding to have managed to complete.</P>
      </SubContainer>
    </Container>
  </>;
}