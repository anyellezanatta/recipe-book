import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@/screens/HomeScreen";
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
      <Stack.Screen name="Recipes" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
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
