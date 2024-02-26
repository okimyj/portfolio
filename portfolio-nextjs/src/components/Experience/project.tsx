'use client';
import DOMPurify from 'dompurify';
import { ProjectData } from '.';
import SkillIcon from './skillIcon';
import { useEffect, useState } from 'react';

interface IProjectProps {
  data: ProjectData;
}
export default function Project({ data }: IProjectProps) {
  const [description, setDescription] = useState<string>(data.description);
  useEffect(() => {
    setDescription(DOMPurify.sanitize(data.description));
  }, []);
  const SubTitle = ({ text }: { text: string }) => {
    return (
      <h2 className="text-2xl mt-5">
        {text}
        <span className="text-primary"> .</span>
      </h2>
    );
  };
  return (
    <div className="mt-12 mb-5">
      <h1 className="text-3xl">{data.name}</h1>
      <p className="text-sm text-gray-400">({data.period})</p>
      <SubTitle text="Description" />
      <div
        dangerouslySetInnerHTML={{
          __html: description,
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
