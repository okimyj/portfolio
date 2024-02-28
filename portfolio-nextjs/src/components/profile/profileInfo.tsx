'use client';
import GitHubSVG from '../../../public/icons/icon_github.svg';
import MailSVG from '../../../public/icons/icon_mail.svg';
import VelogSVG from '../../../public/icons/icon_velog.svg';

import MotionUpDiv from '../common/motion/motionUp';
export default function ProfileInfo() {
  const ContactAddr = ({ svg, title, href, delay }: { svg: React.ReactNode; title: string; href?: string; delay?: number }) => {
    return (
      <MotionUpDiv className="flex flex-row [&>svg]:w-5 [&>svg]:mr-2 justify-center md:justify-start" delay={delay}>
        {svg}
        <a className="hover:text-primary" href={href ?? title} target="_blank">
          {title}
        </a>
      </MotionUpDiv>
    );
  };
  return (
    <div>
      <MotionUpDiv className="flex-row justify-center text-center md:block md:text-left" delay={0.1}>
        <p className="text-7xl font-bold text-nowrap">김 야진</p>
      </MotionUpDiv>
      <div className="ml-2 mt-3 space-y-2">
        <ContactAddr svg={<MailSVG />} title="okimyj@gmail.com" href="mailto:okimyj@gmail.com" delay={0.2} />
        <ContactAddr svg={<GitHubSVG />} title="https://github.com/okimyj" delay={0.3} />
        <ContactAddr svg={<VelogSVG />} title="https://velog.io/@okimyj" delay={0.4} />
      </div>
    </div>
  );
}
