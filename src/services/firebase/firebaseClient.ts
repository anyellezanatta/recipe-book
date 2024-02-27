import auth from "@react-native-firebase/auth";
import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";

import { WithKey } from "./firebaseClient.types";

const firebaseClient = () => {
  const collectionMapper = <TModel, TDoc extends WithKey>(
    collection: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
    documentMapper: (doc: TDoc) => TModel,
  ): TModel[] => {
    return collection?.docs.map((doc) =>
      documentMapper({
        key: doc.id,
        ...doc.data(),
      } as TDoc),
    );
  };

  const subscribeToCollection = <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentMapper: (doc: TDoc) => TModel,
    search: string | null,
    callback: (data: TModel[]) => void,
  ) => {
    const userId = auth().currentUser?.uid;

    let query = firestore()
      .collection(collectionName)
      .where("userId", "==", userId);

    if (search) {
      query = query
        .orderBy("title")
        .startAt(search)
        .endAt(search + "\uf8ff");
      //TODO The firebase doesn't have a partial search and I need to choose between one of this methods(orderby or where) to try emulate the search
      // query = query
      //   .where("title", ">=", search)
      //   .where("title", "<=", search + "\uf8ff");
    }

    const unsubscribe = query.onSnapshot(
      (querySnapshot) => {
        const data = collectionMapper(querySnapshot, documentMapper);

        callback(data);
      },
      (error) => {
        console.log(error);
      },
    );

    return unsubscribe;
  };

  const fetchCollection = async <TModel, TDoc extends WithKey>(
    collectionName: string,
    documentMapper: (doc: TDoc) => TModel,
  ): Promise<TModel[]> => {
    try {
      const userId = auth().currentUser?.uid;

      const collection = await firestore()
        .collection(collectionName)
        .where("userId", "==", userId)
        .get();
      return collectionMapper(collection, documentMapper);
    } catch (error) {
      console.log("Error fetching collection: ", error);
      throw error;
    }
  };

  const fetchDocument = async <TModel, TDoc extends WithKey>(
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

  const addDocument = async <TModel>(collectionName: string, data: TModel) => {
    try {
      await firestore()
        .collection(collectionName)
        .add(data as Document);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDocument = async (
    collectionName: string,
    documentId: string,
    data: object,
  ) => {
    await firestore().collection(collectionName).doc(documentId).update(data);
  };

  const removeDocument = async (collectionName: string, documentId: string) => {
    await firestore().collection(collectionName).doc(documentId).delete();
  };

  const uploadImage = (url: string) => {
    //const reference =
    storage().ref(url);
    // try {
    //   // const task = await reference.putFile(url);
    //   // return task.metadata.fullPath;
    // } catch (error) {
    //   console.log(error);
    // }
    return "";
  };

  return {
    subscribeToCollection,
    fetchCollection,
    fetchDocument,
    addDocument,
    updateDocument,
    removeDocument,
    uploadImage,
  };
};

export const FirebaseClient = firebaseClient();
