import gsap from 'gsap';
import { useLayoutEffect } from 'react';

export default function useScrollAnimatingSections() {
  useLayoutEffect(() => {
    gsap.utils.toArray<HTMLElement>('.scrollAlpha').forEach((element) => {
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
    gsap.utils.toArray<HTMLElement>('.scrollUp').forEach((element) => {
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
}
