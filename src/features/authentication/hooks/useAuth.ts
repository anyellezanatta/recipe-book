import { useEffect, useState } from "react";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

export type authStatus = "initializing" | "initialized";

export const useAuth = () => {
  const [status, setStatus] = useState<authStatus>("initializing");
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
      if (status) setStatus("initialized");
    });
    return subscriber;
  }, [status]);

  return { status, user };
};
