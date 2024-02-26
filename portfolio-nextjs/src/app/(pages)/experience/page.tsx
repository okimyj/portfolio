import ExperienceData from '../../../../public/data/experience.json';
import Experience from '@/components/Experience';

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="text-5xl mb-32">Work Experience</h1>
      {ExperienceData.map((el) => (
        <Experience key={el.companyName} data={el} />
      ))}
    </div>
  );
}
