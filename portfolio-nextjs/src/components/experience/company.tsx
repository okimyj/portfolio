'use client';
import useScrollAlpha from '@/hooks/ui/useScrollAlpha';
import Project from './project';
export type ProjectData = {
  name: string;
  period: string;
  description: string;
  whatDidIDo: string[];
  techStack: string[];
};
type ExperienceData = {
  companyName: string;
  period: string;
  position: string;
  projects: ProjectData[];
};
interface IExperienceProps {
  className?: string;
  data: ExperienceData;
}
export default function Company({ className, data }: IExperienceProps) {
  const scrollClassName = useScrollAlpha();
  return (
    <div className={['experience', 'flex flex-col md:flex-row mb-5', className].join(' ')}>
      <div className="scrollPinTarget text-left md:text-right mr-8 flex-row min-w-52 w-52 break-keep">
        <h1 className="text-4xl leading-normal">{data.companyName}</h1>
        <h2 className="text-sm text-gray-400 mb-1">{data.period}</h2>
        <h2 className="text-sm text-gray-400">{data.position}</h2>
      </div>
      <div className={['scrollPinContents', scrollClassName].join(' ')}>
        {data.projects.map((el, index) => (
          <Project key={index} data={el} />
        ))}
      </div>
    </div>
  );
}
