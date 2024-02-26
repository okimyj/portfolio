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

  return iconData ? <div className={className}>{iconData.icon ? <Image src={`/icons/${iconData.icon}`} alt={iconData.printName} width={100} height={100} /> : iconData.printName}</div> : null;
}
