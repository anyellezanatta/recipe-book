import { spacing } from "@/theme/spacing";
import { FC } from "react";
import {
  ImageProps as RNImageProps,
  Image as RNImage,
  StyleProp,
  StyleSheet,
  ImageStyle,
} from "react-native";

export type UserImageProps = RNImageProps;
export const UserImage: FC<UserImageProps> = ({
  style: $styleOverride,
  source,
  ...props
}) => {
  const $styles: StyleProp<ImageStyle> = [styles.image, $styleOverride];

  return <RNImage {...props} style={$styles} source={source} />;
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: spacing.huge,
  },
});
