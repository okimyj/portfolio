import ProfileInfo from './profileInfo';
import MotionProfileImage from './profileImage';
import ProfileContents from './profileContents';

export default function Profile() {
  return (
    <section className="md:ml-10 min-h-full flex flex-col justify-center">
      {/* 768 이하 인 경우 circle 프로필 세로로 보여줌 */}
      <div className="md:flex items-center borer">
        <MotionProfileImage />

        <ProfileInfo />
      </div>
      <ProfileContents />
    </section>
  );
}
