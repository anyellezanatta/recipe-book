import { FC, useEffect, useState } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

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
  const [url, setUrl] = useState<string | undefined>();
  const [urlDownload, setUrlDownload] = useState<string | undefined>();
  const pickImage = usePickImage();
  const { colors } = useAppTheme();

  useEffect(() => {
    const getUrl = async () => {
      if (url) {
        const urlTemp = await FirebaseClient.downloadUrl(url);

        setUrlDownload(urlTemp);
        onSetUrl(urlTemp!);
      }
    };

    getUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const pickImagePress = async () => {
    pickImage.launchImageLibrary(async (uri) => {
      const uuid = uuidv4();
      const uploadedUrl = await FirebaseClient.uploadImage(uri, `${uuid}.jpg`);
      if (uploadedUrl) {
        setUrl(uploadedUrl);
      }
    });
  };

  return (
    <View {...props}>
      <IconButton icon="add" onPress={pickImagePress} style={styles.buttom} />
      {url ? (
        <Image source={{ uri: urlDownload }} />
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
  buttom: {
    alignSelf: "flex-end",
  },
});
