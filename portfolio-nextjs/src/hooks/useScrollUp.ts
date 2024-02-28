import gsap from 'gsap';
import { useLayoutEffect } from 'react';

export default function useScrollUp(offsetY: number = 80, duration: number = 2, targetClassName: string = 'scrollUp') {
  useLayoutEffect(() => {
    gsap.utils.toArray<HTMLElement>(`.${targetClassName}`).forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: offsetY },
        {
          autoAlpha: 1,
          y: 0,
          duration: duration,
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
