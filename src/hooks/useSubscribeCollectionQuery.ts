import { useEffect } from "react";
import { FirebaseClient } from "@/services/firebase/firebaseClient";
import { WithKey } from "@/services/firebase/firebaseClient.types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useSubscribeCollectionQuery = <TModel, TDoc extends WithKey>(
  collectionName: string,
  documentMapper: (doc: TDoc) => TModel,
  search: string | null,
) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    return FirebaseClient.subscribeToCollection<TModel, TDoc>(
      collectionName,
      documentMapper,
      search,
      (data: TModel[]) => {
        queryClient.setQueriesData([collectionName], data);
        queryClient.invalidateQueries({ queryKey: [collectionName] });
      },
    );
  }, [collectionName, documentMapper, queryClient, search]);

  return useQuery<TModel[]>(
    [collectionName],
    () => new Promise<TModel[]>(() => {}),
  );
};
