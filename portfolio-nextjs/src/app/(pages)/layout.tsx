import MainArt from '@/components/common/mainArt';
import Link from 'next/link';
export default function RootLayout(props: any) {
  return (
    <main className="container m-auto p-10 relative flex">
      <div className="">
        <Link href={'/'} className="mb-2 cursor-pointer hover:text-primary text-base opacity-70">
          HOME
        </Link>
        {props.children}
      </div>
      {/* <div className={'hidden sm:flex justify-end w-40'}>
        <MainArt useBlink={false} className="w-40 h-40 fixed bottom-0" />
      </div> */}
      <div className="rounded-full bg-background w-fit h-fit fixed right-10 bottom-10 main-art-drop-shadow">
        <MainArt className="w-36 h-36 " />
      </div>
    </main>
  );
}
