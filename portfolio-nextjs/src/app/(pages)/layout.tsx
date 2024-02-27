import MainArt from '@/components/common/mainArt';
export default function RootLayout(props: any) {
  return (
    <main className="container m-auto md:flex">
      <div className="md:w-72 md:min-w-72">
        <div className="md:w-72 md:min-w-72 md:fixed md:h-svh md:flex items-center">
          <MainArt artClassName="w-52 h-52" />
        </div>
      </div>
      <div>{props.children}</div>
    </main>
  );
}
