import MainArt from '@/components/common/mainArt';
export default function RootLayout(props: any) {
  return (
    <main className="container m-auto md:flex min-h-svh p-5">
      <div className="md:w-72 md:min-w-72">
        <div className="md:w-72 md:min-w-72 md:fixed md:h-svh md:flex items-center">
          <MainArt artClassName="w-32 h-32 sm:w-52 sm:h-52" />
        </div>
      </div>

      <div className="h-auto [&>div]:h-full">{props.children}</div>
    </main>
  );
}
