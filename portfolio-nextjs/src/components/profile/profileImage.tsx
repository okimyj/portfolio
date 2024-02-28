'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProfileImage from '../../../public/images/profile_image.webp';
import ProfileImageCircle from '../../../public/images/profile_image_circle.webp';
import MotionUpDiv from '../common/motion/motionUp';

export default function MotionProfileImage() {
  return (
    <div>
      <div className="md:hidden flex justify-center">
        <MotionUpDiv>
          <Image className="w-96 " src={ProfileImageCircle} alt="" />
        </MotionUpDiv>
      </div>
      <div className="hidden md:block relative mr-10">
        <motion.div initial={{ opacity: 0, x: '10px' }} animate={{ opacity: 1, x: '0px', transition: { delay: 0.3, duration: 0.5 } }}>
          <Image className="absolute -z-10 -left-5 top-3 w-96 profile-image-shadow" src={ProfileImage} alt="" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: '10px' }} animate={{ opacity: 1, x: '0px', transition: { delay: 0.5, duration: 0.5 } }}>
          <Image className="absolute -z-10 -left-16 top-10 w-96 profile-image-shadow" src={ProfileImage} alt="" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: '-100px' }} animate={{ opacity: 1, x: '0px', transition: { ease: 'backOut', duration: 0.3 } }}>
          <Image className="w-96" src={ProfileImage} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
