'use client';

import useGuestBook from '@/hooks/firebase/guestBook/useGuestBook';
import GuestBookListItem from './item';

export default function GuestBookList() {
  const { guestBooks } = useGuestBook();

  return (
    <ul className="">
      {guestBooks?.map((el) => (
        <GuestBookListItem key={el.id} data={el} />
      ))}
    </ul>
  );
}
