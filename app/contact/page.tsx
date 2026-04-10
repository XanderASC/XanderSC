'use client';

import Button from '@/components/Button';
import Container from '@/components/Container';
import { H1, Input, Label, P, Textarea } from '@/components/defaults';
import Triangle from '@/components/Triangle';
import { SiGithub } from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import { SubmitEvent, useState } from 'react';
import LinkedIn from '@/images/linkedin.svg';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "94f519f7-1f18-4b89-ac04-f0004b03ad2f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return <>
    <Triangle variant="top" side="left" />
    <Container className="flex justify-between">
      <div className="flex gap-4 flex-col">
        <H1>
          Contact Me<br />
        </H1>
        <div className="flex gap-4">
          <Button subtleLink newTab href="https://github.com/XanderASC" className="text-black py-4"><SiGithub className="scale-150"/></Button>
          <Button subtleLink newTab href="https://www.linkedin.com/in/xanderasc/" className="text-black"><Image src={LinkedIn} alt="Xander’s LinkedIn" width={25} className="scale-150" /></Button>
        </div>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="space-y-4">
        <div className="flex gap-4">
          <Label htmlFor="name">Name
          <Input type="text" name="name" placeholder="John Doe" required /></Label>
          <Label htmlFor="email">Email
          <Input type="email" name="email" placeholder="johndoe@email.com" required /></Label>
        </div>
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" placeholder="I would like to..." className="w-full" rows={4} required />
        <Button type="submit">Submit</Button>
        <P>{result}</P>
      </form>
    </Container>
    <Triangle variant="bottom" side="left" />
    <Container gradient={true} parentClass="flex-1" />
  </>;
}