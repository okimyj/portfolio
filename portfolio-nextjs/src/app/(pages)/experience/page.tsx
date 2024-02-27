import ScrollIndicator from '@/components/common/scrollIndicator';
import Experience from '@/components/experience';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'EXPERIENCE',
};
export default function ExperiencePage() {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Experience />
      </Suspense>
      <ScrollIndicator />
    </div>
  );
}
