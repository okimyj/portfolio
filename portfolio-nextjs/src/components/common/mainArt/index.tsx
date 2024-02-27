'use client';
import { useEffect, useState } from 'react';
import MainArtSVG from '../../../../public/icons/main_art.svg';
import styles from './styles.module.scss';
import { usePathname, useRouter } from 'next/navigation';
type ArtButton = {
  id: string;
  element?: SVGPathElement;
  path: string;
};
interface IMainArtProps {
  className?: string;
  useBlink?: boolean;
}
export default function MainArt({ className, useBlink = true }: IMainArtProps) {
  const route = useRouter();
  const pathName = usePathname();
  const [buttons, setButtons] = useState<ArtButton[]>([
    { id: 'left', path: '/profile' },
    { id: 'right', path: '/experience' },
    { id: 'center', path: '/etc' },
  ]);

  const handleClickButton = (path: string) => (e: Event) => {
    route.push(path);
  };
  const handleMouseOver = (e: Event) => {
    buttons.forEach((el) => {
      if (el.element && el.element.classList.contains(styles.blink)) {
        el.element.classList.remove(styles.blink);
      }
    });
  };
  const handleMouseOut = (e: Event) => {
    buttons.forEach((el) => {
      if (el.element && !el.element.classList.contains(styles.blink)) {
        el.element.classList.add(styles.blink);
      }
    });
  };

  useEffect(() => {
    const mainArt = document.getElementById(styles.mainArt);
    const paths = mainArt?.getElementsByTagName('path');
    if (!mainArt || !paths) return;
    for (let i = 0; i < paths.length; ++i) {
      const pathItem = paths.item(i);
      if (!pathItem) continue;
      buttons.forEach((el) => {
        if (pathItem.id.includes(el.id)) {
          el.element = pathItem;
          if (useBlink) {
            pathItem.classList.toggle(styles.blink);
            pathItem.addEventListener('mouseover', handleMouseOver);
            pathItem.addEventListener('mouseout', handleMouseOut);
          }
          pathItem.addEventListener('click', handleClickButton(el.path));
        }
      });
    }
    setButtons(buttons);
  }, []);
  useEffect(() => {
    buttons.forEach((el) => {
      if (el.element) {
        if (el.path === pathName) el.element.classList.add(styles.isDefaultOn);
        else el.element.classList.remove(styles.isDefaultOn);
      }
    });
  }, [buttons, pathName]);
  return (
    <div className={['text-center', className].join(' ')}>
      <MainArtSVG id={styles.mainArt} />
    </div>
  );
}
