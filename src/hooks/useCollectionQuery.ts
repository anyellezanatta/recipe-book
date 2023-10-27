import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FirebaseClient } from "@/services/firebase/firebaseClient";
import { WithKey } from "@/services/firebase/firebaseClient.types";

export const useCollectionQuery = <TModel, TDoc extends WithKey>(
  collectionName: string,
  documentMapper: (doc: TDoc) => TModel,
) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    const data = FirebaseClient.fetchCollection<TModel, TDoc>(
      collectionName,
      documentMapper,
    );
    queryClient.setQueryData([collectionName], data);
    queryClient.invalidateQueries({ queryKey: [collectionName] });
  }, [collectionName, documentMapper, queryClient]);

  return useQuery<TModel[]>(
    [collectionName],
    () => new Promise<TModel[]>(() => {}),
  );
};
