import Etc from '@/components/etc';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ETC',
};
export default function EtcPage() {
  return <Etc />;
}
