import {
  Box,
  Button,
  Container,
  ContainerProps,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface TryBannerProps {
  subheading?: string;
  heading?: string | React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonHrefType?: "external" | "internal";
  _wrapper?: ContainerProps;
}

export function TryBanner(props: TryBannerProps) {
  const {
    subheading = "Try today",
    heading = (
      <>
        Ready to start
        <br /> for free?
      </>
    ),
    description = (
      <>
        Create a crowd.dev account, add your community tools
        <br />and start supercharging your community efforts today.
        <br />No credit card required.
      </>
    ),
    buttonText = "Get started",
    buttonHref = `${process.env.NEXT_PUBLIC_APP_HOST}/auth/signup`,
    buttonHrefType = "external",
  } = props;

  const LinkOrFragment =
    buttonHrefType === "external"
      ? React.Fragment
      : (linkProps: { children: React.ReactNode }) => (
        <Link href={buttonHref} passHref prefetch={false} {...linkProps} />
      );

  return (
    <Container maxW="landingMax" px={[0, 0, 12, 12, 32]} {...props._wrapper}>
      <Box
        // bg="linear-gradient(113.99deg, #FDF6F4 15.75%, #FBDCD5 57.98%, #F29582 83.82%);"
        bg="brand.500"
        borderRadius="md"
        shadow="xl"
        pos="relative"
        p={[8, 8, 16, 16, 120]}
      >
        <picture>
          <source type="image/png" srcSet="/rocket.png" />
          <Image
            src="/rocket.png"
            alt="rocket"
            pos="absolute"
            w={["3xl", 800]}
            top="50%"
            left="50%"
            transform={["translate(15%, -42.5%)", "translate(-2%, -50%)"]}
            display={["none", "none", "none", "block"]}
          />
        </picture>
        <VStack align="start" spacing={4} pos="relative">
          <Text
            fontFamily="landingHeading"
            fontSize={30}
            fontWeight="semibold"
            // color="primary"
            color="gray.50"
            lineHeight="shorter"
            display="none"
          >
            {subheading}
          </Text>
          <Heading
            as="h2"
            fontFamily="landingHeading"
            fontSize={[32, 32, 54]}
            lineHeight={[1.2, 1.2, "65px"]}
            // color="landing.almostBlack.500"
            color="gray.50"
          >
            {heading}
          </Heading>
          <Text
            fontSize={18} fontWeight="medium"
            // color="gray.600"
            color="gray.50"
          >
            {description}
          </Text>
          <LinkOrFragment>
            <Button
              as="a"
              size="landingMd"
              variant="landingSolid"
              fontFamily="landingHeading"
              rel="noreferrer noopener"
              {...(buttonHrefType === "external" && { href: buttonHref })}
            >
              {buttonText}
            </Button>
          </LinkOrFragment>
        </VStack>
      </Box>
    </Container>
  );
}
