'use client';
import { useLayoutEffect } from 'react';
import ExperienceData from '../../../public/data/experience.json';
import Company from '@/components/experience/company';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
gsap.registerPlugin(ScrollTrigger);
export default function Experience() {
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
        });
      });
    });

    gsap.utils.toArray<HTMLElement>('.experience').forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 2,
          scrollTrigger: {
            scrub: 2,
            trigger: element,
            start: '15% 90%',
            end: '15% 70%',
          },
        },
      );
    });
    gsap.utils.toArray<HTMLElement>('.projectUnit').forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            scrub: 2,
            trigger: element,
            start: '15% 90%',
            end: '15% 70%',
          },
        },
      );
    });
  }, []);
  return (
    <div className="mt-12">
      {ExperienceData.map((el) => (
        <Company key={el.companyName} data={el} />
      ))}
      <footer className="h-32"></footer>
    </div>
  );
}
