'use client';
import Project from './project';

type ExpericeData = {
  companyName: string;
  period: string;
  position: string;
  projects: ProjectData[];
};
export type ProjectData = {
  name: string;
  period: string;
  description: string;
  whatDidIDo: string[];
  techStack: string[];
};
interface IExperienceProps {
  data: ExpericeData;
}
export default function Experience({ data }: IExperienceProps) {
  return (
    <div className="flex mb-5 border-b border-gray-400">
      <div className="flex-row text-right w-52 break-keep companyWrapper">
        <h1 className="text-4xl leading-normal">{data.companyName}</h1>
        <h2 className="text-sm text-gray-400">{data.period}</h2>
        <h2 className="text-sm text-gray-400">{data.position}</h2>
      </div>
      <div className="projectWrapper">
        {data.projects.map((el, index) => (
          <Project key={index} data={el} />
        ))}
      </div>
    </div>
  );
}
