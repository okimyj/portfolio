import { motion } from 'framer-motion';
interface IMotionUpDivProps {
  className?: string;
  delay?: number;
  startY?: number;
  endY?: number;
  duration?: number;
  children: React.ReactNode | React.ReactNode[];
}
export default function MotionUpDiv({ className, delay = 0, startY = 10, endY = 0, duration = 0.5, children }: IMotionUpDivProps) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: startY }} animate={{ opacity: 1, y: endY, transition: { delay, duration } }}>
      {children}
    </motion.div>
  );
}
