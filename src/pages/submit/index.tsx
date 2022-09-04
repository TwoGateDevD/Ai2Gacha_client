import { useState, useEffect } from "react";
import { chakra, selector } from "@chakra-ui/react";
import { NextPage } from "next";
import { ItemCard } from "src/components/item-card";
import { getMyItems } from "../../utils/api";
import { Item } from "src/types/item";
import Link from "next/link";
import { Button } from "src/components/button";

const SubmitIndex: NextPage = () => {
    const [items, setItems] = useState<Item[]>([]);
    useEffect(() => {
        (async () => {
            const res = await getMyItems();
            console.log("test")
            console.log(res)
            setItems(res);
        })();
    }, []);
    return (
        <chakra.div>
            <chakra.h1 color="white" textAlign="center" fontSize="30px">商品出品</chakra.h1>
            <chakra.div
                marginTop="60px"
                display="flex"
                flexDirection="column"
                gap="30px"
            >
                {items.map((item: Item) => {
                    return (
                        <ItemCard type={"submit"} title={`${item.name}`} imagePath={`${item.image_url}`} itemId={`${item.id}`}></ItemCard>
                    )
                })}
                <chakra.div
                    textAlign="center"
                    marginBottom="40px"
                >
                    <Link href="/" passHref>
                        <Button as="a" isNegative border disable={false}>
                            戻る
                        </Button>
                    </Link>
                </chakra.div>
            </chakra.div>
        </chakra.div>
    )
}

export default SubmitIndex