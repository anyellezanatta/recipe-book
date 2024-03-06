import { ImagePickerResponse } from "react-native-image-picker";

import { ImagePickerClient } from "@/services/imagePicker/imagePickerClient";

export const usePickImage = () => {
  const launchImageLibrary = (callbackLibrary: (uri: string) => void) => {
    ImagePickerClient.launchImageLibraryPhone(
      ({ assets }: ImagePickerResponse) => {
        if (assets) {
          const { uri, type } = assets[0]!;
          console.log(type);
          callbackLibrary(uri!);
        }
      },
    );
  };

  const launchCamera = () => {
    ImagePickerClient.launchCameraPhone(({ assets }) => {
      if (assets) {
        // const { uri, fileName } = assets[0]!;
        // setUrl(uri);
        // setImageName(fileName);
      }
    });
  };

  return { launchImageLibrary, launchCamera };
};
