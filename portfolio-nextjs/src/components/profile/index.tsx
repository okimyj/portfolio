import Image from 'next/image';
import ProfileImageCircle from '../../../public/images/profile_image_circle.webp';
import GitHubSVG from '../../../public/icons/icon_github.svg';
import MailSVG from '../../../public/icons/icon_mail.svg';
import VelogSVG from '../../../public/icons/icon_velog.svg';
import MotionProfileImage from './motionProfileImage';

export default function Profile() {
  const ContactAddr = ({ children }: { children: React.ReactNode[] }) => {
    return <li className="flex flex-row [&>svg]:w-5 [&>svg]:mr-2 justify-center md:justify-start">{children}</li>;
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
        <p className="text-7xl font-bold">김 야진</p>
        <ul className="mt-3 space-y-2">
          <ContactAddr>
            <MailSVG /> okimyj@gmail.com
          </ContactAddr>
          <ContactAddr>
            <GitHubSVG /> https://github.com/okimyj
          </ContactAddr>
          <ContactAddr>
            <VelogSVG /> https://velog.io/@okimyj
          </ContactAddr>
        </ul>
      </div>
    </section>
  );
}
