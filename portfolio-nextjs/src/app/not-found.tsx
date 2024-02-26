import MainArt from '@/components/MainArt';
import { useRouter } from 'next/navigation';
export default function NotFound() {
  return (
    <main className={'w-full h-full flex flex-col items-center justify-center'}>
      <h1 className="text-7xl">404 Not Found!</h1>
      <div className="w-96 h-96">
        <MainArt />
      </div>
    </main>
  );
}
