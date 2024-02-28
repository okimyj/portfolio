import { Suspense } from 'react';
import GuestBookList from './list';
import GuestBookWriteForm from './writeForm';

export default function GuestBook() {
  return (
    <Suspense fallback={<div></div>}>
      <GuestBookWriteForm />
      <GuestBookList />
    </Suspense>
  );
}
