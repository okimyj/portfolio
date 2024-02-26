import Experience from '@/components/Experience';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'EXPERIENCE',
};
export default function ExperiencePage() {
  return (
    <Suspense fallback={<div></div>}>
      <Experience />
    </Suspense>
  );
}
