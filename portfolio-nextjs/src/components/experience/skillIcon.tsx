import Image from 'next/image';
import skillIconData from '../../../public/data/skillIcon.json';
type SkillIconDataType = {
  [index: string]: any;
};
interface ISkillIconProps {
  className?: string;
  skillId: string;
}
export default function SkillIcon({ className, skillId }: ISkillIconProps) {
  const SkillIconData = skillIconData as SkillIconDataType;
  const iconData = SkillIconData[skillId];
  const TextIcon = () => {
    return (
      <div className="w-fit px-3 rounded-2xl text-center font-semibold text-base" style={{ color: iconData.fontColor, backgroundColor: iconData.color }}>
        {iconData.printName}
      </div>
    );
  };
  return iconData ? (
    <div className={className}>{iconData.icon ? <Image className="w-9 h-9" src={`/icons/${iconData.icon}`} alt={iconData.printName} width={100} height={100} /> : <TextIcon />}</div>
  ) : null;
}
