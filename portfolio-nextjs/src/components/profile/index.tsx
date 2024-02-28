import Image from 'next/image';
import ProfileImageCircle from '../../../public/images/profile_image_circle.webp';
import GitHubSVG from '../../../public/icons/icon_github.svg';
import MailSVG from '../../../public/icons/icon_mail.svg';
import VelogSVG from '../../../public/icons/icon_velog.svg';
import MotionProfileImage from './motionProfileImage';
import Link from 'next/link';

export default function Profile() {
  const ContactAddr = ({ svg, title, href }: { svg: React.ReactNode; title: string; href?: string }) => {
    return (
      <li className="flex flex-row [&>svg]:w-5 [&>svg]:mr-2 justify-center md:justify-start">
        {svg}
        <a href={href ?? title} target="_blank">
          {title}
        </a>
      </li>
    );
  };
  return (
    <section className="md:flex min-h-svh items-center ml-10">
      <div className="md:hidden flex justify-center">
        <Image className="w-96 " src={ProfileImageCircle} alt="" />
      </div>
      <div className="hidden md:block relative">
        <MotionProfileImage />
      </div>
      <div className="flex-row justify-center text-center md:block md:text-left">
        <p className="text-7xl font-bold text-nowrap">김 야진</p>
        <ul className="mt-3 space-y-2">
          <ContactAddr svg={<MailSVG />} title="okimyj@gmail.com" href="mailto:okimyj@gmail.com" />
          <ContactAddr svg={<GitHubSVG />} title="https://github.com/okimyj" />
          <ContactAddr svg={<VelogSVG />} title="https://velog.io/@okimyj" />
        </ul>
      </div>
    </section>
  );
}
