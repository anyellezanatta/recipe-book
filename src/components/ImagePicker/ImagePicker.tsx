import { FC } from "react";
import { Pressable, View, ViewProps } from "react-native";
import { Image } from "../Image/Image";
import { Text } from "../Text";
import { usePickImage } from "@/hooks/usePickImage";

export type ImagePickerProps = ViewProps & {
  onSetUrl: (url: string) => void;
};

export const ImagePicker: FC<ImagePickerProps> = ({ onSetUrl, ...props }) => {
  const pickImage = usePickImage();

  const pickImagePress = () => {
    pickImage.launchImageLibrary();
    if (pickImage.url) onSetUrl(pickImage.url);
  };

  return (
    <View {...props}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        onPress={pickImagePress}>
        <Text text="Add Image" size={"sm"} />
      </Pressable>
      {pickImage.url ? <Image source={{ uri: pickImage.url }} /> : null}
    </View>
  );
};
