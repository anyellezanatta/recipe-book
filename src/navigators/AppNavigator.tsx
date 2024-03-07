import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Icon } from "@/components/Icon";
import { GoogleSignInButton } from "@/features/authentication/components/GoogleSignInButton";
import { useAuth } from "@/features/authentication/hooks/useAuth";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AddScreen } from "@/screens/AddScreen";
import { DetailsScreen } from "@/screens/DetailsScreen";
import { FavoritesScreen } from "@/screens/FavoritesScreen";
import { RecipeScreen } from "@/screens/RecipeScreen";
import { UserScreen } from "@/screens/UserScreen";

export type AppStackParamList = {
  SignIn: undefined;
  Recipes: undefined;
  Favorites: undefined;
  User: undefined;
  RecipesTab: undefined;
  RecipeDetails: {
    id: string;
  };
  RecipeAdd: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
const Tab = createBottomTabNavigator<AppStackParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Recipes"
        component={RecipeScreen}
        options={{
          headerTitle: "Recipes",
          headerTitleAlign: "left",
          tabBarLabel: "Recipes",
          tabBarLabelPosition: "beside-icon",
          tabBarActiveBackgroundColor: "#f0f1f1",
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name={"fast-food-outline"} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarLabelPosition: "beside-icon",
          tabBarActiveBackgroundColor: "#f0f1f1",
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name={"heart-outline"} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: "User",
          tabBarLabelPosition: "beside-icon",
          tabBarActiveBackgroundColor: "#f0f1f1",
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name={"person-outline"} />,
        }}
      />
    </Tab.Navigator>
  );
};

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
          <Stack.Screen name="RecipesTab" component={Tabs} />
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
