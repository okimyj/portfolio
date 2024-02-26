'use client';

import { useLayoutEffect } from 'react';
import ExperienceData from '../../../../public/data/experience.json';
import Experience from '@/components/Experience';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
gsap.registerPlugin(ScrollTrigger);
export default function ExperiencePage() {
  useLayoutEffect(() => {
    gsap.matchMedia().add('(min-width:768px)', () => {
      const projectWrappers = gsap.utils.toArray<HTMLElement>('.projectWrapper');
      gsap.utils.toArray<HTMLElement>('.companyWrapper').forEach((company, i) => {
        ScrollTrigger.create({
          trigger: company,
          start: 'top top',
          end: `${projectWrappers[i].offsetHeight - 100}px top`,
          pin: true,
          pinSpacing: false,
          markers: false,
        });
      });
    });
  }, []);
  return (
    <div>
      <h1 className="text-5xl mb-32">Work Experience</h1>
      {ExperienceData.map((el) => (
        <Experience key={el.companyName} data={el} />
      ))}
    </div>
  );
}
