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
export default function Company({ data }: IExperienceProps) {
  console.log(data);
  return (
    <div className="p-6">
      <h1 className="text-5xl">
        {data.companyName} ({data.period})
      </h1>
      <h2>{data.position}</h2>
      {data.projects.map((el) => (
        <Project data={el} />
      ))}
    </div>
  );
}
