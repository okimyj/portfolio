'use client';
import DOMPurify from 'dompurify';
import { ProjectData } from './company';
import SkillIcon from './skillIcon';

interface IProjectProps {
  data: ProjectData;
}
export default function Project({ data }: IProjectProps) {
  const SubTitle = ({ text }: { text: string }) => {
    return (
      <h2 className="text-2xl mt-5">
        {text}
        <span className="text-primary"> .</span>
      </h2>
    );
  };
  return (
    <div className="p-5">
      <h1 className="text-4xl">{data.name}</h1>
      <p className="text-sm text-gray-400">({data.period})</p>
      <SubTitle text="Description" />
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize?.(data.description),
        }}
      />
      <SubTitle text="What did I do" />
      {data.whatDidIDo.map((el, index) => (
        <p key={index}>{el}</p>
      ))}
      <SubTitle text="TechStack" />
      <div className="flex space-x-2">
        {data.techStack.map((el, index) => (
          <SkillIcon key={index} skillId={el} className="w-9 h-9" />
        ))}
      </div>
    </div>
  );
}
