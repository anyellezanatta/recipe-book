import { FC, useEffect, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useDebounce } from "@/hooks/useDebounce";

export type DebouncedInputProps = Omit<
  TextInputProps,
  "value" | "onChangeText"
> & {
  onChangeValue?: (value: string) => void;
};

export const DebouncedInput: FC<DebouncedInputProps> = ({
  onChangeValue,
  ...props
}) => {
  const [text, setText] = useState<string>("");
  const debouncedSearchTerm = useDebounce(text);

  useEffect(() => {
    onChangeValue?.(debouncedSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return <TextInput {...props} onChangeText={setText} value={text} />;
};
