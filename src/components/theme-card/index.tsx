import { chakra } from "@chakra-ui/react";
import { Button } from "../button";
import type { ThemeCardProperties } from "./type/model";
import type { FC } from "react";

const ThemeCard: FC<ThemeCardProperties> = ({ theme, itemId, bids, isTag = false, ...rest }) => (
  <chakra.div
    maxWidth="21.25rem"
    paddingX="0.75rem"
    paddingY="0.625rem"
    bgColor="white"
    borderRadius="0.5rem"
    {...rest}
  >
    <chakra.h2 fontSize="1.25rem" _before={{ content: '"●"', color: "secondary", fontSize: "1rem" }} color="black">
      {theme}
    </chakra.h2>
    {!isTag && (
      <chakra.div display="flex" alignItems="center" justifyContent="space-between">
        <chakra.p color="black" fontSize="1rem">{`入札数: ${bids}`}</chakra.p>
        <Button
          isNegative={false}
          border={false}
          disable={false}
          paddingX="1.25rem"
          paddingY="0.125rem"
          fontSize="1.25rem"
        >
          選択
        </Button>
      </chakra.div>
    )}
  </chakra.div>
);

export { ThemeCard };
