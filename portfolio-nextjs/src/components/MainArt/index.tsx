"use client";
import { useEffect, useState } from "react";
import MainArtSVG from "../../../public/icons/main_art.svg";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
type ArtButton = {
  id: string;
  element?: SVGPathElement;
  path: string;
};

export default function MainArt({ className }: { className?: string }) {
  const route = useRouter();
  const [buttons, setButtons] = useState<ArtButton[]>([
    { id: "left", path: "/profile" },
    { id: "right", path: "/experience" },
    { id: "center", path: "/etc" },
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
    const paths = mainArt?.getElementsByTagName("path");
    if (!mainArt || !paths) return;
    for (let i = 0; i < paths.length; ++i) {
      const pathItem = paths.item(i);
      if (!pathItem) continue;
      buttons.forEach((el) => {
        if (pathItem.id.includes(el.id)) {
          el.element = pathItem;
          pathItem.classList.toggle(styles.blink);
          pathItem.addEventListener("mouseover", handleMouseOver);
          pathItem.addEventListener("mouseout", handleMouseOut);
          pathItem.addEventListener("click", handleClickButton(el.path));
        }
      });
    }
    setButtons(buttons);
  }, []);
  return <MainArtSVG id={styles.mainArt} className={[className].join(" ")} />;
}
