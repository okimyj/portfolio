'use client';
import MainArt from '@/components/MainArt';
import { useRouter } from 'next/navigation';
export default function RootLayout(props: any) {
  const router = useRouter();
  return (
    <main className="container m-auto p-10 relative">
      <div
        className="mb-2 cursor-pointer hover:text-primary text-base opacity-70"
        onClick={() => {
          router.push('/');
        }}
      >
        HOME
      </div>
      <div className={'flex justify-end'}>
        <MainArt useBlink={false} className="w-40 h-40 absolute" />
      </div>
      {props.children}
    </main>
  );
}
