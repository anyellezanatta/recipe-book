import { FirebaseClient } from "@/services/firebase/firebaseClient";
import { useMutation } from "@tanstack/react-query";

export const useAddDocument = <TModel>(collectionName: string) => {
  return useMutation({
    mutationFn: (data: TModel) =>
      FirebaseClient.addDocument<TModel>(collectionName, data),
  });
};
