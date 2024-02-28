'use client';
import ExperienceData from '../../../public/data/experience.json';
import Company from '@/components/experience/company';
import './style.css';
import useScrollPin from '@/hooks/ui/useScrollPin';

export default function Experience() {
  useScrollPin('(min-width:768px)');
  return (
    <div className="mt-12">
      {ExperienceData.map((el) => (
        <Company key={el.companyName} data={el} />
      ))}
      <footer className="h-32"></footer>
    </div>
  );
}
