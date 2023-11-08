import { FirebaseClient } from "@/services/firebase/firebaseClient";
import { useMutation } from "@tanstack/react-query";

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
