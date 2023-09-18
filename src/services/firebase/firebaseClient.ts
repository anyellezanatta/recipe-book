import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { WithKey } from "./firebaseClient.types";

const firebaseClient = () => {
  const collectionMapper = <TModel, TDoc extends WithKey>(
    collection: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
    documentMapper: (doc: TDoc) => TModel,
  ): TModel[] => {
    const data: TModel[] = [];
    collection.forEach((documentSnapshot) =>
      data.push(
        documentMapper({
          key: documentSnapshot.id,
          ...documentSnapshot.data(),
        } as TDoc),
      ),
    );
    return data;
  };

  const subscribeToCollection = <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentMapper: (doc: TDoc) => TModel,
    callback: (data: TModel[]) => void,
  ) => {
    const unsubscribe = firestore()
      .collection(collectionName)
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
    docId: string,
    documentMapper: (doc: TDoc) => TModel,
  ): Promise<TModel> => {
    const documentSnapshot = await firestore()
      .collection(collectionName)
      .doc(docId)
      .get();

    if (!documentSnapshot.exists) return {} as TModel; //TODO change

    return documentMapper({
      key: documentSnapshot.id,
      ...documentSnapshot.data(),
    } as TDoc);
  };

  const addDocument = async <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentMapper: (model: TModel) => TDoc,
    data: TModel,
  ) => {
    await firestore().collection(collectionName).add(documentMapper(data));
  };

  const updateDocument = async <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentId: string,
    documentMapper: (model: TModel) => TDoc,
    data: TModel,
  ) => {
    await firestore()
      .collection(collectionName)
      .doc(documentId)
      .update(documentMapper(data));
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
