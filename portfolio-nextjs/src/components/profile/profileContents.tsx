'use client';
import { motion } from 'framer-motion';
import useScrollUp from '@/hooks/useScrollUp';

export default function ProfileContents() {
  const scrollUpClass = useScrollUp();
  const MotionUpContents = ({ className, delay, children }: { className?: string; delay: number; children: React.ReactNode }) => {
    return (
      <motion.div className={className} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay, duration: 0.5 } }}>
        {children}
      </motion.div>
    );
  };
  return (
    <div className="mt-16">
      <MotionUpContents className="text-profile" delay={0}>
        웹 프론트엔드 2년차
      </MotionUpContents>
      <MotionUpContents className="text-profile" delay={0.4}>
        모바일 게임 클라이언트 10년차
      </MotionUpContents>
      <MotionUpContents className="mt-5" delay={1}>
        <p>대부분 프로젝트의 마무리 단계에 있는 Frontend 개발자로서</p>
        <p>타 팀의 일정이 딜레이 되더라도 기한내에 업무를 완료하기 위한 책임감을 가지고 있습니다</p>
        <p>때문에 다른 부서의 일정이 지연되는 경우 조급함을 느끼곤 합니다.</p>
      </MotionUpContents>
      <MotionUpContents className="mt-5" delay={1.2}>
        <p>이를 개선하기 위해 더미 레이아웃과 기능 중심의 선행 개발을 진행하여 최대한 빠르게 기능적인 피드백을 수용할 수 있도록 하고,</p>
        <p>서버 연동 측면에서는 통신이 가능하지 않더라도 기획서나 API문서를 기반으로 선행 개발을 진행하며</p>
        <p>실 연동시 발생할 수 있는 예외상황들에 대해 예측하여 커뮤니케이션 하며 협력을 강화해왔습니다.</p>
      </MotionUpContents>
      <MotionUpContents className="mt-5" delay={1.5}>
        <p>프로젝트 성공의 핵심은 개발자, 기획자, 디자이너 등 구성원들 간의 명확한 의사소통에 있다고 생각합니다.</p>
        <p>꼼꼼한 성격을 바탕으로 기획자와 디자이너의 요구사항을 정확히 이해하고 조율하여</p>
        <p>기대에 부응하는 결과물을 만들어내는데 주력해왔습니다.</p>
      </MotionUpContents>

      <MotionUpContents className="mt-5" delay={1.7}>
        <p>그 동안의 경험과 이력을 바탕으로 Web Frontend 개발자로서 사용자에게 편리하고 생활에 도움이 될 수 있는 서비스를 만들고 싶습니다.</p>
      </MotionUpContents>

      {/* <div className={['text-profile', scrollUpClass].join(' ')}>웹 프론트엔드 2년차</div>
      <div className={['text-profile', scrollUpClass].join(' ')}>모바일 게임 클라이언트 10년차</div> */}
    </div>
  );
}
