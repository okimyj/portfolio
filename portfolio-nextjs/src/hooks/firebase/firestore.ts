// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from 'firebase/app';
import {
  QueryFieldFilterConstraint,
  QueryOrderByConstraint,
  QuerySnapshot,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  query,
  updateDoc,
} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { getDocs, collection, WithFieldValue, DocumentData, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const firebaseApp = !firebase.apps.length ? initializeApp(firebaseConfig, 'okimyj-portfolio') : getApp();
const firebaseDB = getFirestore(firebaseApp);
const getCollection = (storePath: string) => collection(firebaseDB, storePath);

export const firestoreAddDoc = async (storePath: string, data: WithFieldValue<DocumentData>) => {
  return await addDoc(getCollection(storePath), data);
};
export const firestoreDeleteDoc = async (storePath: string, id: string) => {
  return await deleteDoc(doc(firebaseDB, storePath, id));
};
export const firestoreUpdateDoc = async (storePath: string, id: string, data: WithFieldValue<DocumentData>) => {
  return await updateDoc(doc(firebaseDB, storePath, id), data);
};

export const firestoreGetSnapshot = ({
  storePath,
  orderBy,
  compositeFilter,
  callback,
}: {
  storePath: string;
  orderBy?: QueryOrderByConstraint;
  compositeFilter?: QueryFieldFilterConstraint;
  callback?: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => void;
}) => {
  const collection = getCollection(storePath);
  try {
    const q =
      compositeFilter && orderBy ? query(collection, compositeFilter, orderBy) : compositeFilter ? query(collection, compositeFilter) : orderBy ? query(collection, orderBy) : query(collection);

    return onSnapshot(q, (querySnapshot) => {
      callback?.(querySnapshot);
    });
  } catch (error) {
    console.log(error);
  }
};

export default firebaseDB;
