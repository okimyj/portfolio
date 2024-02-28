import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
export default function useScrollPin(mediaConditions: string) {
  useLayoutEffect(() => {
    gsap.matchMedia().add(mediaConditions, () => {
      const pinContents = gsap.utils.toArray<HTMLElement>('.scrollPinContents');
      gsap.utils.toArray<HTMLElement>('.scrollPinTarget').forEach((company, i) => {
        ScrollTrigger.create({
          trigger: company,
          start: 'top top',
          end: `${pinContents[i].offsetHeight - 100}px top`,
          pin: true,
          pinSpacing: false,
        });
      });
    });
  }, []);
}
