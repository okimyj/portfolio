import ExperienceData from '../../../../public/data/experience.json';
import Company from '@/components/Experience/company';

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="text-5xl mb-32">Work Experience</h1>
      {ExperienceData.map((el) => (
        <Company data={el} />
      ))}
    </div>
  );
}
