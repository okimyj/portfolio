import MainArt from '@/components/common/mainArt';
import Link from 'next/link';
export default function RootLayout(props: any) {
  return (
    <main className="container m-auto p-10 relative">
      <Link href={'/'} className="mb-2 cursor-pointer hover:text-primary text-base opacity-70">
        HOME
      </Link>
      <div className={'hidden sm:flex justify-end'}>
        <MainArt useBlink={false} className="w-40 h-40 absolute" />
      </div>
      {props.children}
    </main>
  );
}
