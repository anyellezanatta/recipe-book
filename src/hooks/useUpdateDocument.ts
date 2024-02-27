import { useMutation } from "@tanstack/react-query";

import { FirebaseClient } from "@/services/firebase/firebaseClient";

export const useUpdateDocument = (
  collectionName: string,
  documentId: string,
) => {
  // const queryClient = useQueryClient();

  return useMutation((data: Record<string, unknown>) => {
    return FirebaseClient.updateDocument(collectionName, documentId, data);
    // queryClient.invalidateQueries({ queryKey: [collectionName, documentId] });
  });
};
