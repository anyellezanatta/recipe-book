import { useMutation } from "@tanstack/react-query";

import { FirebaseClient } from "@/services/firebase/firebaseClient";

export const useAddDocument = <TModel>(collectionName: string) => {
  return useMutation({
    mutationFn: (data: TModel) =>
      FirebaseClient.addDocument<TModel>(collectionName, data),
  });
};
