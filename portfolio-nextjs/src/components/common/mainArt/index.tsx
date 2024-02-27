'use client';
import { useCallback, useEffect, useState } from 'react';
import MainArtSVG from '../../../../public/icons/main_art.svg';
import styles from './styles.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useMotionValueEvent, useScroll } from 'framer-motion';
type ArtButton = {
  id: string;
  element?: SVGPathElement;
  path: string;
  title: string;
};
interface IMainArtProps {
  artClassName?: string;
  className?: string;
}
export default function MainArt({ className, artClassName }: IMainArtProps) {
  const route = useRouter();
  const pathName = usePathname();

  const isHome = pathName === '/';

  const [buttons, setButtons] = useState<ArtButton[]>([
    { id: 'left', path: '/profile', title: 'Profile' },
    { id: 'right', path: '/experience', title: 'Work Experience' },
    { id: 'center', path: '/etc', title: 'Etc' },
  ]);

  const PageTitle = useCallback(() => {
    if (isHome) return null;
    const button = buttons.find((button) => button.path === pathName);
    return button ? <h1 className="page-title break-keep">{button.title}</h1> : null;
  }, [pathName]);

  const handleClickButton = (path: string) => (e: Event) => {
    route.push(path);
  };
  const handleMouseOver = useCallback(() => {
    buttons.forEach((el) => {
      if (el.element && el.element.classList.contains(styles.blink)) {
        el.element.classList.remove(styles.blink);
      }
    });
  }, [buttons, pathName]);
  const handleMouseOut = useCallback(() => {
    buttons.forEach((el) => {
      if (el.element && !el.element.classList.contains(styles.blink)) {
        if (pathName === '/' || pathName !== el.path) el.element.classList.add(styles.blink);
      }
    });
  }, [buttons, pathName]);

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
          if (pathName === '/' || pathName !== el.path) {
            pathItem.classList.toggle(styles.blink);
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
        el.element.addEventListener('mouseover', handleMouseOver);
        el.element.addEventListener('mouseout', handleMouseOut);

        if (el.path === pathName) {
          el.element.classList.add(styles.isDefaultOn);
          el.element.classList.remove(styles.blink);
        } else {
          el.element.classList.add(styles.blink);
          el.element.classList.remove(styles.isDefaultOn);
        }
      }
    });
    return () => {
      buttons.forEach((button) => {
        button.element?.removeEventListener('mouseover', handleMouseOver);
        button.element?.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [buttons, pathName]);
  return (
    <div className={['text-left flex md:flex-col min-h-96', className].join(' ')}>
      <nav className="text-center md:text-left">
        <MainArtSVG id={styles.mainArt} className={artClassName} />
        {isHome ? null : (
          <Link href={'/'} className="mb-2 cursor-pointer hover:text-primary text-base font-semibold opacity-70">
            HOME
          </Link>
        )}
      </nav>
      <PageTitle />
    </div>
  );
}
