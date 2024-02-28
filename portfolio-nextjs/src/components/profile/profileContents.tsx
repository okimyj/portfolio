'use client';
import { motion } from 'framer-motion';
import useScrollUp from '@/hooks/ui/useScrollUp';

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
      <MotionUpContents className="text-profile after-primary-dot" delay={0}>
        웹 프론트엔드 2년차
      </MotionUpContents>
      <MotionUpContents className="text-profile after-primary-dot" delay={0.4}>
        모바일 게임 클라이언트 10년차
      </MotionUpContents>
      <MotionUpContents className="mt-5 text-profileContents" delay={1}>
        Frontend 개발자로서 프로젝트 후반부 마무리까지 작업이 이어지는 만큼 일정에 대한 책임감이 남달라야 한다고 생각합니다.
        <br />
        타 팀의 작업 지연이 발생하더라도 기한내에 프로젝트를 완료하기 위해 더미 레이아웃과 기능 중심 선행개발을 추진하고 있습니다.
        <br />
      </MotionUpContents>
      <MotionUpContents className="mt-5 text-profileContents" delay={1.2}>
        이러한 방식을 통해 기획적인 측면에서는 기능적인 피드백을 신속하게 반영할 수 있는 체계를 마련하고,
        <br /> 서버 연동 측면에서는 통신이 가능하지 않더라도 기획서나 API문서를 바탕으로 선행개발을 진행함으로써
        <br />실 연동시 발생할 수 있는 예외상황들에 대해 예측하고 대응할 수 있는 환경을 조성하고 있습니다.
      </MotionUpContents>

      <MotionUpContents className="mt-5 text-profileContents" delay={1.4}>
        프로젝트 성공의 핵심은 개발자, 기획자, 디자이너 등 구성원들 간의 명확한 의사소통에 있다고 생각합니다.
        <br />
        꼼꼼한 성격을 바탕으로 기획자와 디자이너의 요구사항을 정확히 이해하고 조율하여 기대에 부응하는 결과물을 만들어내는데 주력해왔습니다.
      </MotionUpContents>

      <MotionUpContents className="mt-5 text-profileContents" delay={1.6}>
        그 동안의 경험과 이력을 바탕으로 Web Frontend 개발자로서 아름답고, 편리하며 사용자에게 도움이 될 수 있는 서비스를 만들고 싶습니다.
      </MotionUpContents>

      {/* <div className={['text-profile', scrollUpClass].join(' ')}>웹 프론트엔드 2년차</div>
      <div className={['text-profile', scrollUpClass].join(' ')}>모바일 게임 클라이언트 10년차</div> */}
    </div>
  );
}
