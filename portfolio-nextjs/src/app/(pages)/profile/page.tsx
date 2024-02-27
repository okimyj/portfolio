import Profile from '@/components/profile';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'PROFILE',
};
export default function ProfilePage() {
  return (
    <div>
      <Suspense>
        <Profile />
      </Suspense>
    </div>
  );
}
