import { FC, useEffect, useState } from "react";
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
  const [url, setUrl] = useState<string | undefined>();
  const [urlDownload, setUrlDownload] = useState<string | undefined>();
  const pickImage = usePickImage();
  const { colors } = useAppTheme();

  const generateUUID = () => {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 =
      (typeof performance !== "undefined" &&
        performance.now &&
        performance.now() * 1000) ||
      0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
  };

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
      const uploadedUrl = await FirebaseClient.uploadImage(
        uri,
        `${generateUUID()}.jpg`,
      );
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
  buttom: { alignSelf: "flex-end" },
});
