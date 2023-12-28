// import { useState } from "react";

import { ImagePickerClient } from "@/services/imagePicker/imagePickerClient";

export const usePickImage = () => {
  //   const [url, setUrl] = useState(undefined);

  return ImagePickerClient.launchCameraPhone();
};
