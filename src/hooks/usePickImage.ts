import { useState } from "react";
import { ImagePickerClient } from "@/services/imagePicker/imagePickerClient";

export const usePickImage = () => {
  const [url, setUrl] = useState<string | undefined>("");

  const launchImageLibrary = () => {
    ImagePickerClient.launchImageLibraryPhone(({ assets }) => {
      setUrl(assets![0]?.uri);
    });
  };

  const launchCamera = () => {
    ImagePickerClient.launchCameraPhone(({ assets }) => {
      if (assets) {
        setUrl(assets[0]?.uri);
      }
    });
  };

  return { url, launchImageLibrary, launchCamera };
};
