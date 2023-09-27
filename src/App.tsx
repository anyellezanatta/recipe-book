import { AppNavigator } from "@/navigators/AppNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
