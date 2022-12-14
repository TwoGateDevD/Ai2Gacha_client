import { chakra } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { Button } from "../../../../../components/button";
import { SvgWrapper } from "../../../../../components/svg-wrapper";

const SearchMatched: NextPage = () => {
  return (
    <chakra.div textAlign="center" height="100vh">
      <chakra.h1 color="white" paddingTop="190px" paddingBottom="20px" fontSize="30px">
        入札できました！
      </chakra.h1>
      <SvgWrapper path="/statics/undraw_letter_re_8m03 1.svg" />
      <chakra.div display="flex" justifyContent="center" alignItems="flex-end" marginTop="30px">
        <Link href="/" passHref>
          <Button as="a" isNegative border disable={false}>
            ホームに戻る
          </Button>
        </Link>
      </chakra.div>
    </chakra.div>
  );
};

export default SearchMatched;
