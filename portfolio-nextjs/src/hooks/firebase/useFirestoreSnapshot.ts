import { ICustomDocumentData } from '@/types/customTypes';
import { firestoreGetDocs } from './firestore';
import { QueryOrderByConstraint } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function useFirestoreSnapshot(storePath: string, orderBy?: QueryOrderByConstraint) {
  const [docs, setDocs] = useState<ICustomDocumentData[]>([]);
  const refreshSnapshot = async () => {
    firestoreGetDocs({
      storePath,
      orderBy,
      callback: (snapshot) => {
        if (!snapshot) return;
        const list: ICustomDocumentData[] = [];
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setDocs(list);
      },
    });
  };
  useEffect(() => {
    refreshSnapshot();
  }, []);
  return { docs };
}
