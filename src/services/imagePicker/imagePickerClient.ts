import {
  Callback,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";

const imagePickerClient = () => {
  const launchCameraPhone = (callback?: Callback) => {
    return launchCamera({ mediaType: "photo" }, callback);
  };
  const launchImageLibraryPhone = (callback?: Callback) => {
    return launchImageLibrary({ mediaType: "photo" }, callback);
  };

  return { launchCameraPhone, launchImageLibraryPhone };
};
export const ImagePickerClient = imagePickerClient();
