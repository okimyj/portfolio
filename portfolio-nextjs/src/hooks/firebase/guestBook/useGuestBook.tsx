import { GuestBookFormData } from '@/types/customTypes';
import { firestoreAddDoc } from '../firestore';
import useFirestoreSnapshot from '../useFirestoreSnapshot';
import { orderBy } from 'firebase/firestore';
const STORE_PATH = 'guestBook';
export default function useGuestBook() {
  const { docs: guestBooks } = useFirestoreSnapshot(STORE_PATH, orderBy('createdAt', 'desc'));

  const addGuestBook = async (data: GuestBookFormData) => {
    return await firestoreAddDoc(STORE_PATH, { ...data, createdAt: Date.now().toString() });
  };
  return { addGuestBook, guestBooks };
}
