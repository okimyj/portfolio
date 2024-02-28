'use client';
import SanitizeText from '@/components/common/ui/sanitizeText';
import { GuestBookData } from '@/types/customTypes';

interface IGuestBookListItem {
  data: GuestBookData;
}
export default function GuestBookListItem({ data }: IGuestBookListItem) {
  return (
    <section className="py-4 px-2 [&:not(:last-of-type)]:border-b">
      <div>writer {data.writer}</div>
      <SanitizeText className="leading-loose" text={data.contents ?? ''} />
    </section>
  );
}
