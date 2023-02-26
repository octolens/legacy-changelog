import { Link, Flex, Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  platform: string
};

export function FooterSocial(props: Props) {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/${props.platform}`}
    >
      <Flex
        width={8} justify="center" align="center" cursor="pointer"
        height={8} rounded="md" backgroundColor="brand.500" marginRight="1"
      >
        <Image
          width={6}
          height={6}
          src={`/${props.platform}-white.svg`}
          alt={`${props.platform} logo"`}
        />
      </Flex>
    </Link>
  );
}
