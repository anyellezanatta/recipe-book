import { spacing } from "@/theme/spacing";
import { FC } from "react";
import {
  ImageProps as RNImageProps,
  Image as RNImage,
  StyleProp,
  StyleSheet,
  ImageStyle,
} from "react-native";

export type ImageProps = RNImageProps;
export const Image: FC<ImageProps> = ({
  style: $styleOverride,
  source,
  ...props
}) => {
  const $styles: StyleProp<ImageStyle> = [styles.image, $styleOverride];

  return <RNImage {...props} style={$styles} source={source} />;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
    borderRadius: spacing.medium,
  },
});
