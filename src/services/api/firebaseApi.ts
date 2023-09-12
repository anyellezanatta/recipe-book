import { Config } from "@/config";
import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  DocumentData,
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";

export const getFirebaseOptions = (): FirebaseOptions => ({
  apiKey: Config.API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDER_ID,
  appId: Config.APP_ID,
  measurementId: Config.MEASUREMENT_ID,
});

const apiClient = () => {
  const firebase = initializeApp(getFirebaseOptions());

  const firestore = getFirestore(firebase);

  const subscribeToCollection = <T>(
    collectionName: string,
    documentMapper: (doc: DocumentData) => T,
    callback: (
      data: T[] //QuerySnapshot<DocumentData, DocumentData>
    ) => void
  ) => {
    const queryCollection = query(collection(firestore, collectionName));
    const unsubscribe = onSnapshot(queryCollection, (snapshot) => {
      const data: T[] = [];
      snapshot.forEach((docData) => data.push(documentMapper(docData)));
      callback(data);
    });

    return unsubscribe;
  };

  const fetchCollection = async <T>(
    collectionName: string,
    documentMapper: (doc: DocumentData) => T
  ): Promise<T[]> => {
    try {
      const queryCollection = query(collection(firestore, collectionName));
      const docs = await getDocs(queryCollection);
      const data: T[] = [];
      docs.forEach((doc) => {
        data.push(documentMapper(doc.data));
      });
      return data;
    } catch (error) {
      console.log("Error fetching collection: ", error);
      throw error;
    }
  };

  const updateDocument = async <T>(
    collectionName: string,
    documentId: string,
    data: T
  ): Promise<void> => {
    try {
      const docRef = doc(firestore, collectionName, documentId);
      await updateDoc(docRef, data);
      console.log(`Document updated with ID: ${documentId}`);
    } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
    }
  };

  return {
    subscribeToCollection,
    fetchCollection,
    updateDocument,
  };
};

export const ApiClient = apiClient();
