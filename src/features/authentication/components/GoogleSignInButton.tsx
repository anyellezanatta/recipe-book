import { FC } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import Config from "react-native-config";
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: Config.WEB_CLIENT_ID,
});

export type GoogleSignInButtonProps = ViewProps;

export const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({
  style: $styleOverride,
  ...props
}) => {
  const $styles = [styles.container, $styleOverride];

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const user = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <View {...props} style={$styles}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        onPress={onGoogleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
});
