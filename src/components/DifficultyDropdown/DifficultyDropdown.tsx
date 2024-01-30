import { FC, useState } from "react";
import { DifficultyType } from "@/models";
import DropDownPicker, {
  DropDownPickerProps,
} from "react-native-dropdown-picker";

export type DifficultyItems = { label: string; value: DifficultyType };
export type DifficultyDropdownProps = Omit<
  DropDownPickerProps<DifficultyItems>,
  "items" | "open" | "setOpen" | "value" | "setValue" | "multiline" | "multiple"
> & { onchange: (value: DifficultyType | null) => void };

export const DifficultyDropdown: FC<DifficultyDropdownProps> = ({
  style,
  onchange,
  //...props
}) => {
  const items: DifficultyItems[] = [
    { label: "Easy", value: "easy" },
    { label: "Hard", value: "hard" },
    { label: "Medium", value: "medium" },
  ];
  const [value, setValue] = useState<DifficultyType>("easy");
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      // {...props}
      style={style}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={(valueChanged) => onchange(valueChanged)}
    />
  );
};
