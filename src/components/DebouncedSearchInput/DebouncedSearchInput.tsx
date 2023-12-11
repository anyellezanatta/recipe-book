import { FC, useEffect, useState } from "react";
import { SearchInput, SearchInputProps } from "../SearchInput";
import { useDebounce } from "@/hooks/useDebounce";

export type DebouncedSearchInputProps = Omit<
  SearchInputProps,
  "value" | "onChangeText"
> & {
  onSearch?: (searchTerm: string) => void;
};

export const DebouncedSearchInput: FC<DebouncedSearchInputProps> = ({
  onSearch,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    onSearch?.(debouncedSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <SearchInput
      {...props}
      selectTextOnFocus
      onChangeText={setSearchTerm}
      value={searchTerm}
    />
  );
};
