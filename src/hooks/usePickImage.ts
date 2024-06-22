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

  return { launchImageLibrary };
};
