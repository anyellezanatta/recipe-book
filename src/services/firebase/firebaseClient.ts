import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { WithKey } from "./firebaseClient.types";

const firebaseClient = () => {
  const collectionMapper = <TModel, TDoc extends WithKey>(
    collection: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
    documentMapper: (doc: TDoc) => TModel,
  ): TModel[] => {
    return collection.docs.map((doc) =>
      documentMapper({
        key: doc.id,
        ...doc.data(),
      } as TDoc),
    );
  };

  const subscribeToCollection = <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentMapper: (doc: TDoc) => TModel,
    callback: (data: TModel[]) => void,
  ) => {
    const unsubscribe = firestore()
      .collectionGroup(collectionName)
      //.collection(collectionName)

      //TODO: Add where
      .onSnapshot((querySnapshot) => {
        const data = collectionMapper(querySnapshot, documentMapper);

        callback(data);
      });

    return unsubscribe;
  };

  const fetchCollection = async <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentMapper: (doc: TDoc) => TModel,
  ): Promise<TModel[]> => {
    try {
      //TODO: Add where
      const collection = await firestore().collection(collectionName).get();
      return collectionMapper(collection, documentMapper);
    } catch (error) {
      console.log("Error fetching collection: ", error);
      throw error;
    }
  };

  const subscribeToDocument = async <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentId: string,
    documentMapper: (doc: TDoc) => TModel,
  ): Promise<TModel | void> => {
    const documentSnapshot = await firestore()
      .collection(collectionName)
      .doc(documentId)
      .get();

    if (documentSnapshot.exists) {
      return documentMapper({
        key: documentSnapshot.id,
        ...documentSnapshot.data(),
      } as TDoc);
    }

    return Promise.resolve();
  };

  const addDocument = async <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentMapper: (model: TModel) => TDoc,
    data: TModel,
  ) => {
    await firestore().collection(collectionName).add(documentMapper(data));
  };

  const updateDocument = async (
    collectionName: string,
    documentId: string,
    data: object,
  ) => {
    await firestore().collection(collectionName).doc(documentId).update(data);
  };

  const removeDocument = async (collectionName: string, documentId: string) => {
    //TODO: Remove Subcolletion
    await firestore().collection(collectionName).doc(documentId).delete();
  };

  return {
    subscribeToCollection,
    fetchCollection,
    subscribeToDocument,
    addDocument,
    updateDocument,
    removeDocument,
  };
};

export const FirebaseClient = firebaseClient();
