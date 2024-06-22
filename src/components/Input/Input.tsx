import { FC, useEffect, useState } from "react";
import { TextInputProps } from "react-native";

import { TextInput } from "react-native-gesture-handler";

export type InputProps = Omit<TextInputProps, "value" | "onChangeText"> & {
  onChangeValue?: (value: string) => void;
};

export const Input: FC<InputProps> = ({ onChangeValue, ...props }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    onChangeValue?.(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <TextInput {...props} onChangeText={setText} value={text} />;
};
