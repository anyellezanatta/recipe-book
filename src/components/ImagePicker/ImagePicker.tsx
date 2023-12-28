import { FC } from "react";
import { Pressable, View, ViewProps } from "react-native";
import { Image } from "../Image/Image";
import { Text } from "../Text";
import { usePickImage } from "@/hooks/usePickImage";

export type ImagePickerProps = ViewProps;

export const ImagePicker: FC<ImagePickerProps> = ({ ...props }) => {
  const imageUrl = "";

  const a = usePickImage();
  const pickImage = () => {
    a;
    console.log("pressed");
  };

  return (
    <View {...props}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        onPress={pickImage}>
        <Text text="Add Image" size={"lg"} />
      </Pressable>
      <Image source={{ uri: imageUrl }} />
    </View>
  );
};
