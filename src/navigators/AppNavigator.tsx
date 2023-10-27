import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeScreen } from "@/screens/RecipeScreen";
import { useAppTheme } from "@/hooks/useAppTheme";
import { DetailsScreen } from "@/screens/DetailsScreen";

export type AppStackParamList = {
  Recipes: undefined;
  DetailsScreen: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  const { colors } = useAppTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.background },
      }}>
      <Stack.Screen name="Recipes" component={RecipeScreen} />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ headerTitle: "" }}
      />
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
