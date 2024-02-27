import Experience from '@/components/experience';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'EXPERIENCE',
};
export default function ExperiencePage() {
  return (
    <div>
      <h1 className="page-title">Work Experience</h1>
      <Suspense fallback={<div></div>}>
        <Experience />
      </Suspense>
    </div>
  );
}
