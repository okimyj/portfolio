'use client';
import Project from './project';

type ExperienceData = {
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
  className?: string;
  data: ExperienceData;
}
export default function Experience({ className, data }: IExperienceProps) {
  return (
    <div className={['experience', 'flex flex-col md:flex-row mb-5 ', className].join(' ')}>
      <div className="text-left md:text-right mr-8 flex-row min-w-52 w-52 break-keep companyWrapper">
        <h1 className="text-4xl leading-normal">{data.companyName}</h1>
        <h2 className="text-sm text-gray-400">{data.period}</h2>
        <h2 className="text-sm text-gray-400">{data.position}</h2>
      </div>
      <div className="projectWrapper max-w-xl">
        {data.projects.map((el, index) => (
          <Project key={index} data={el} />
        ))}
      </div>
    </div>
  );
}
