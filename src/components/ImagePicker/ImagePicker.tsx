import { FC } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

import { IconButton } from "@/components/IconButton";
import { Image } from "@/components/Image";
import { Text } from "@/components/Text";
import { useAppTheme } from "@/hooks/useAppTheme";
import { usePickImage } from "@/hooks/usePickImage";
import { FirebaseClient } from "@/services/firebase/firebaseClient";
import { spacing } from "@/theme/spacing";

export type ImagePickerProps = ViewProps & {
  onSetUrl: (url: string) => void;
};

export const ImagePicker: FC<ImagePickerProps> = ({ onSetUrl, ...props }) => {
  const pickImage = usePickImage();
  const { colors } = useAppTheme();

  const pickImagePress = () => {
    pickImage.launchImageLibrary();

    if (pickImage.url) {
      const url = FirebaseClient.uploadImage(pickImage.url);
      console.log(url);
      onSetUrl(url);
    }
  };

  return (
    <View {...props}>
      <IconButton icon="add" onPress={pickImagePress} style={styles.buttom} />
      {pickImage.url ? (
        <Image source={{ uri: pickImage.url }} />
      ) : (
        <View
          style={[
            { backgroundColor: colors.cardBackground },
            styles.imageContainer,
          ]}>
          <Text style={{ color: colors.cardTitle }} text="No Image" size="md" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    width: "100%",
    height: 180,
    borderRadius: spacing.medium,
  },
  buttom: { alignSelf: "flex-end" },
});
