import GuestBookList from './list';
import GuestBookWriteForm from './writeForm';

export default function GuestBook() {
  return (
    <div>
      <GuestBookWriteForm />
      <GuestBookList />
    </div>
  );
}
