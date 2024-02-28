import gsap from 'gsap';
import { useLayoutEffect } from 'react';

export default function useScrollAlpha(targetClassName: string = 'scrollAlpha') {
  useLayoutEffect(() => {
    gsap.utils.toArray<HTMLElement>(`.${targetClassName}`).forEach((element) => {
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
  }, []);
  return targetClassName;
}
