import { ICustomDocumentData } from '@/types/customTypes';
import { firestoreGetSnapshot } from './firestore';
import { QueryFieldFilterConstraint, QueryOrderByConstraint } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function useFirestoreSnapshot({ storePath, orderBy, compositeFilter }: { storePath: string; orderBy?: QueryOrderByConstraint; compositeFilter?: QueryFieldFilterConstraint }) {
  const [docs, setDocs] = useState<ICustomDocumentData[]>([]);
  const refreshSnapshot = () => {
    console.log('-- refreshSnapshot --');
    return firestoreGetSnapshot({
      storePath,
      orderBy,
      compositeFilter,
      callback: (snapshot) => {
        console.log('receive snap shot ----');
        if (!snapshot) return;
        // snapshot.docChanges().forEach((change) => {
        //   if (change.type === 'added') {
        //     console.log('added : ', change.doc.data());
        //     setDocs((prev) => [{ id: change.doc.id, ...change.doc.data() }, ...prev]);
        //   }

        //   if (change.type === 'modified') console.log('modified : ', change.doc.data());
        //   if (change.type === 'removed') console.log('removed : ', change.doc.data());
        // });
        const list: ICustomDocumentData[] = [];
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setDocs(list);
      },
    });
  };
  useEffect(() => {
    const unsubscribe = refreshSnapshot();
    return () => {
      unsubscribe?.();
    };
  }, []);
  return { docs };
}
