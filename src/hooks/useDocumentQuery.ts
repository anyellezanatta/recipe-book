//import { useEffect } from "react";
import { FirebaseClient } from "@/services/firebase/firebaseClient";
import { WithKey } from "@/services/firebase/firebaseClient.types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const useDocumentQuery = <TModel, TDoc extends WithKey>(
  collectionName: string,
  documentId: string,
  documentMapper: (doc: TDoc) => TModel,
) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchDoc = async () => {
      const data = await FirebaseClient.fetchDocument<TModel, TDoc>(
        collectionName,
        documentId,
        documentMapper,
      );

      queryClient.setQueryData([collectionName, documentId], data);
      queryClient.invalidateQueries({ queryKey: [collectionName, documentId] });
    };

    fetchDoc();
  }, [collectionName, documentId, documentMapper, queryClient]);

  return useQuery<TModel>(
    [collectionName, documentId],
    () => new Promise<TModel>(() => {}),
  );
};
