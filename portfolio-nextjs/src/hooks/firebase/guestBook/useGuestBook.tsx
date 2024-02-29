import { GuestBookData } from '@/types/customTypes';
import { firestoreAddDoc, firestoreUpdateDoc } from '../firestore';
import useFirestoreSnapshot from '../useFirestoreSnapshot';
import { orderBy, where } from 'firebase/firestore';
const STORE_PATH = 'guestBook';
export default function useGuestBook() {
  const { docs: guestBooks } = useFirestoreSnapshot({ storePath: STORE_PATH, orderBy: orderBy('createdAt', 'desc'), compositeFilter: where('deletedAt', '==', '') });

  const addGuestBook = (callback: () => void) => async (data: GuestBookData) => {
    await firestoreAddDoc(STORE_PATH, { ...data, createdAt: Date.now().toString(), deletedAt: '', updatedAt: '' });
    callback?.();
  };
  const deleteGuestBook = (data: GuestBookData, callback?: () => void) => {
    firestoreUpdateDoc(STORE_PATH, data.id, { ...data, deletedAt: Date.now().toString() }).then(() => {
      callback?.();
    });
  };
  const updateGuestBook = (id: string, data: GuestBookData, callback?: () => void) => {
    firestoreUpdateDoc(STORE_PATH, id, { ...data, updatedAt: Date.now().toString() }).then(() => {
      callback?.();
    });
  };
  return { addGuestBook, deleteGuestBook, guestBooks };
}
