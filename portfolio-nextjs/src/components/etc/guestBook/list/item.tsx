'use client';
import SanitizeText from '@/components/common/ui/sanitizeText';
import { GuestBookData } from '@/types/customTypes';
import DeleteIcon from '../../../../../public/icons/icon_delete.svg';
import EditIcon from '../../../../../public/icons/icon_edit.svg';
import Button from '@/components/common/ui/button';
import useGuestBook from '@/hooks/firebase/guestBook/useGuestBook';
interface IGuestBookListItem {
  data: GuestBookData;
}
export default function GuestBookListItem({ data }: IGuestBookListItem) {
  const { deleteGuestBook } = useGuestBook();
  const handleDelete = () => {
    deleteGuestBook(data);
  };
  return (
    <section className="py-4 px-2 [&:not(:last-of-type)]:border-b">
      <div className="flex justify-between">
        <div>writer {data.writer}</div>
        <div className="flex text-white">
          <Button className=" border-none hover:text-primary">
            <EditIcon width={15} />
          </Button>
          <Button className=" border-none hover:text-primary" onClick={handleDelete}>
            <DeleteIcon width={15} />
          </Button>
        </div>
      </div>

      <SanitizeText className="leading-loose" text={data.contents ?? ''} />
    </section>
  );
}
