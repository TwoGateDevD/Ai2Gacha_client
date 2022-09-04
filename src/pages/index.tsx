import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { FC } from "react";
import { Button } from "src/components/button";
import Link from "next/link";

// const GradientText: FC<HTMLChakraProps<"span">> = (chakraProps) => (
//   <chakra.span
//     fontSize="6vw"
//     background="linear-gradient(90deg, #4d62d0, #d152c9 30%, #e6b357)"
//     backgroundClip="text"
//     {...chakraProps}
//   />
// );

// const Index: NextPage = () => (
//   <chakra.div height="100vh" display="flex" justifyContent="center" alignItems="center">
//     <GradientText as="h2">Hello Chakra UI</GradientText>
//   </chakra.div>
// );

export default function Index() {
  return (
    <chakra.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <chakra.div
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="50vh"
      >
        <Link href="/purchase" passHref>
          <Button as="a" isNegative={false} border={false} children={"購入"} disable={false} />
        </Link>
        <Link href="/search" passHref>
          <Button as="a" isNegative={false} border={false} children={"検索"} disable={false} />
        </Link>
        <Link href="/submit" passHref>
          <Button as="a" isNegative={false} border={false} children={"出品"} disable={false} />
        </Link>
      </chakra.div>
    </chakra.div>
  )
}