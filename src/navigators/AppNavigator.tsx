import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeScreen } from "@/screens/RecipeScreen";
import { useAppTheme } from "@/hooks/useAppTheme";
import { DetailsScreen } from "@/screens/DetailsScreen";
import { GoogleSignInButton } from "@/features/authentication/components/GoogleSignInButton";
import { useAuth } from "@/features/authentication/hooks/useAuth";
import { AddScreen } from "@/screens/AddScreen";

export type AppStackParamList = {
  SignIn: undefined;
  Recipes: undefined;
  RecipeDetails: {
    id: string;
  };
  RecipeAdd: undefined;
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
        navigationBarColor: "transparent",
        headerTitle: "",
      }}>
      {!user ? (
        <Stack.Screen name="SignIn" component={GoogleSignInButton} />
      ) : (
        <>
          <Stack.Screen
            name="Recipes"
            component={RecipeScreen}
            options={{ headerTitle: "Recipes", headerTitleAlign: "left" }}
          />
          <Stack.Screen name="RecipeDetails" component={DetailsScreen} />
          <Stack.Screen name="RecipeAdd" component={AddScreen} />
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
