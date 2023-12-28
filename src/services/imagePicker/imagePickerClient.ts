import {
  launchCamera,
  // launchImageLibrary
} from "react-native-image-picker";

const imagePickerClient = () => {
  const launchCameraPhone = () => {
    launchCamera({ mediaType: "photo" }, () => {
      console.log("aaaa");
    });
  };
  const launchImageLibraryPhone = () => {};

  return { launchCameraPhone, launchImageLibraryPhone };
};
export const ImagePickerClient = imagePickerClient();
