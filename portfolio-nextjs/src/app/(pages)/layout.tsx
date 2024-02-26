import type { Metadata } from 'next';

import MainArt from '@/components/MainArt';

export const metadata: Metadata = {
  title: 'Page',
  description: 'Generated by create next app',
};

export default function RootLayout(props: any) {
  return (
    <main className="container m-auto p-10 relative">
      <div className={'hidden md:block w-40 h-40 absolute right-5'}>
        <MainArt useBlink={false} />
      </div>
      {props.children}
    </main>
  );
}
