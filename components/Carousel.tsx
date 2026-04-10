'use client';

import Button from '@/components/Button';
import { SiGithub } from '@icons-pack/react-simple-icons';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import React from 'react';

interface CarouselProps {
  children: React.ReactNode;
  githubUrl?: string;
  liveUrl?: string;
}

export function Carousel({ children, githubUrl, liveUrl }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className="space-y-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-x">
          {children}
        </div>
      </div>

      <div className="flex gap-4">
        {githubUrl && <Button subtleLink newTab href={githubUrl} className="text-black px-[.75rem]"><SiGithub className="scale-150"/></Button>}
        {liveUrl && <Button subtleLink newTab href={liveUrl} className="text-black px-[.75rem]"><ExternalLink className="scale-150"/></Button>}
        <div className="flex flex-1 gap-4 justify-center">
          <Button onClick={goToPrev} className="px-[.5rem]">
            <ChevronLeft className="scale-150 text-black" />
          </Button>
          <Button onClick={goToNext} className="px-[.5rem]">
            <ChevronRight className="scale-150" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Slide({ children }: { children: React.ReactNode }) {
  return <div className="flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0 mr-4">
    {children}
  </div>
}