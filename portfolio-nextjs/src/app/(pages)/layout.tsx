import MainArt from '@/components/common/mainArt';
import Link from 'next/link';
export default function RootLayout(props: any) {
  return (
    <main className="container flex m-auto">
      <div className="w-72 min-w-72">
        <div className="fixed h-svh flex items-center">
          <MainArt className="w-52 h-52 -translate-y-1/2" />
        </div>
      </div>
      <div>{props.children}</div>
    </main>
    // <main className="container m-auto p-10 relative flex">
    //   <div className="">
    //     <Link href={'/'} className="mb-2 cursor-pointer hover:text-primary text-base opacity-70">
    //       HOME
    //     </Link>
    //     {props.children}
    //   </div>
    //   {/* <div className={'hidden sm:flex justify-end w-40'}>
    //     <MainArt useBlink={false} className="w-40 h-40 fixed bottom-0" />
    //   </div> */}
    //   <div className="rounded-full bg-background w-fit h-fit fixed right-10 bottom-10 main-art-drop-shadow">
    //     <MainArt className="w-36 h-36 " />
    //   </div>
    // </main>
  );
}
