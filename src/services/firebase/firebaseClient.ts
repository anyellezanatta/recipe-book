import firestore from "@react-native-firebase/firestore";
import { WithKey } from "./firebaseClient.types";

const firebaseClient = () => {
  const subscribeToCollection = <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentMapper: (doc: TDoc) => TModel,
    callback: (data: TModel[]) => void,
  ) => {
    const unsubscribe = firestore()
      .collection(collectionName)
      .onSnapshot((querySnapshot) => {
        const data: TModel[] = [];

        querySnapshot.forEach((documentSnapshot) =>
          data.push(
            documentMapper({
              key: documentSnapshot.id,
              ...documentSnapshot.data(),
            } as TDoc),
          ),
        );
        callback(data);
      });

    return unsubscribe;
  };

  // const fetchCollection = async <T>(
  //   collectionName: string,
  //   documentMapper: (doc: DocumentData) => T,
  // ): Promise<T[]> => {
  //   try {
  //     const queryCollection = query(collection(firestore, collectionName));
  //     const docs = await getDocs(queryCollection);
  //     const data: T[] = [];
  //     docs.forEach((doc) => {
  //       data.push(documentMapper(doc.data));
  //     });
  //     return data;
  //   } catch (error) {
  //     console.log("Error fetching collection: ", error);
  //     throw error;
  //   }
  // };

  // const updateDocument = async <T extends Record<string, unknown>>(
  //   collectionName: string,
  //   documentId: string,
  //   data: T,
  // ): Promise<void> => {
  //   try {
  //     const docRef = doc(firestore, collectionName, documentId);
  //     await updateDoc(docRef, data);
  //     console.log(`Document updated with ID: ${documentId}`);
  //   } catch (error) {
  //     console.error("Error updating document: ", error);
  //     throw error;
  //   }
  // };

  return {
    subscribeToCollection,
    // fetchCollection,
    // updateDocument,
  };
};

export const FirebaseClient = firebaseClient();
