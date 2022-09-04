import { HTMLChakraProps } from "@chakra-ui/react";

export type ThemeCardProperties = HTMLChakraProps<"div"> & {
  theme: string;
  itemId: string;
  bids: number;
  isTag: boolean;
};
