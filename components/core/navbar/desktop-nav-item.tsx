import { Flex, TextProps, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export interface DesktopNavItemProps {
  title: string;
  type: "external-link" | "internal-link";
  href?: string;
  isActive?: boolean;
  icon?: string;
}

export function DesktopNavItem(props: DesktopNavItemProps) {
  const Wrapper =
    props.type !== "internal-link"
      ? React.Fragment
      : (linkProps: { children: React.ReactNode }) => (
          <Link href={props.href} passHref prefetch={false} {...linkProps} />
        );

  return (
    <Wrapper>
      <Flex
        {...defaultNavItemStyle}
        color={props.isActive ? "brand.500" : "landing.black"}
        as={props.type === "external-link" ? "a" : "div"}
        alignItems="center"
        {...(props.type === "external-link" && {
          href: props.href,
          rel: "noreferrer noopener",
        })}
      >
        {
        props.icon && (
          <Image
            src={`/github.svg`}
            alt={props.icon}
            w={4}
            h={4}
            mr={2}
            display={["none", "none", "inline-block"]}
          />
        )
      }
        {props.title}
      </Flex>
    </Wrapper>
  );
}

export const defaultNavItemStyle: TextProps = {
  style: { textDecoration: "none" },
  fontFamily: "landingHeading",
  fontWeight: "medium",
  fontSize: "sm",
  color: "landing.black",
  textAlign: "center",
  cursor: "pointer",
  _hover: { color: "brand.500" },
  _active: { color: "brand.600" },
};
