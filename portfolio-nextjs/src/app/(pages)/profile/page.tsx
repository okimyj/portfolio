import Profile from '@/components/profile';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'PROFILE',
};
export default function ProfilePage() {
  return (
    <div>
      <h1 className="page-title">Profile</h1>
      <Suspense>
        <Profile />
      </Suspense>
    </div>
  );
}
