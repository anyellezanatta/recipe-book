import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeScreen } from "@/screens/RecipeScreen";
import { useAppTheme } from "@/hooks/useAppTheme";
import { DetailsScreen } from "@/screens/DetailsScreen";
import { GoogleSignInButton } from "@/features/authentication/components/GoogleSignInButton";
import { useAuth } from "@/features/authentication/hooks/useAuth";

export type AppStackParamList = {
  SignIn: undefined;
  Recipes: undefined;
  DetailsScreen: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  const { colors } = useAppTheme();

  const { status, user } = useAuth();

  if (status === "initializing") return null;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.background },
      }}>
      {!user ? (
        <Stack.Screen
          name="SignIn"
          component={GoogleSignInButton}
          options={{ headerTitle: "" }}
        />
      ) : (
        <>
          <Stack.Screen name="Recipes" component={RecipeScreen} />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{ headerTitle: "" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  const theme = useAppTheme();

  return (
    <NavigationContainer theme={theme}>
      <AppStack />
    </NavigationContainer>
  );
};
