'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Icon from '../../../../public/icons/chevron-force-down.svg';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
export default function ScrollIndicator() {
  const pathName = usePathname();
  const { scrollYProgress, scrollY } = useScroll();
  const [isShow, setIsShow] = useState<boolean>(false);
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsShow(latest < 1);
  });
  useEffect(() => {
    setIsShow(scrollYProgress.get() < 1);
  }, [pathName]);
  return isShow ? (
    <div className="fixed bottom-0 text-primary">
      <motion.div
        className="w-16 h-16"
        initial={{ opacity: 0.5, y: '-20px' }}
        animate={{ opacity: 0.8, y: '0' }}
        transition={{ ease: 'easeOut', repeat: Infinity, repeatType: 'mirror', duration: 0.8 }}
      >
        <Icon />
      </motion.div>
    </div>
  ) : null;
}
