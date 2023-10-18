import { Text, View } from "react-native";
//TODO change
export const FullScreenLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>Loading...</Text>
    </View>
  );
};
