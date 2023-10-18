import "@react-navigation/native";
import { AppStackParamList } from "@/navigators/AppNavigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
