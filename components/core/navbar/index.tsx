import { useState } from "react";
import Link from "next/link";
import { defaultPx } from "lib/utils/default-container-px";
import { DesktopNavItem } from "components/core/navbar/desktop-nav-item";
import { Box, Button, Container, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";

const MOBILE_MENU_COLOR = "#241f47";
const MOBILE_FONT_WEIGHT = 600;

const ROUTES = [
  {
    href: "/",
    title: "Changelog",
    type: "internal-link",
  },
  {
    href: process.env.NEXT_PUBLIC_MARKETING_HOST + "/blog",
    title: "Blog",
    type: "external-link",
  },
  {
    href: process.env.NEXT_PUBLIC_MARKETING_HOST + "/pricing",
    title: "Pricing",
    type: "external-link",
  },
  {
    href: "https://github.com/CrowdDotDev/crowd.dev",
    title: "GitHub",
    type: "external-link",
    icon: "github",
  },
] as const;

interface Props {
  activeHref?: typeof ROUTES[number]["href"];
}

export default function Navbar(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile navbar */}
      {
        <Box w="100%" zIndex="overlay" display={["block", "block", "none"]} position="absolute">
          <Flex direction="column">
            <Flex align="center" justify="space-between">
              <Flex p={4} as="a" href={process.env.NEXT_PUBLIC_MARKETING_HOST}>
                <Image h={12} src="/crowd-dev-logo-small.svg" alt="crowd-dev-logo" />
              </Flex>
              <Flex p={4} onClick={toggle}>
                <HStack spacing={4} align="center">
                  <Button
                    as="a"
                    size="landingMd"
                    variant="landingOutline"
                    href={`${process.env.NEXT_PUBLIC_APP_HOST}/auth/signin`}
                  >
                    Login
                  </Button>
                  <Button
                    as="a"
                    size="landingMd"
                    variant="landingSolid"
                    href={`${process.env.NEXT_PUBLIC_APP_HOST}/auth/signup`}
                  >
                    Get Started for Free
                  </Button>
                </HStack>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      }
      <Flex
        px={5}
        py="30%"
        h="100vh"
        w="100vw"
        position="fixed"
        bg="white"
        zIndex="sticky"
        direction="column"
        justify="space-between"
        overflowY="hidden"
        display={isOpen ? "block" : "none"}
      >
        <Flex width="100%" direction="column" h="40%" justify="space-between">
          <Flex
            align="center"
            as="a"
            href="/"
            style={{ textDecoration: "none" }}
          >
            <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
              Changelog
            </Text>
          </Flex>
          <Link
            prefetch={false}
            href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/customer-stories`}
          >
            <Flex align="center" style={{ textDecoration: "none" }}>
              <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
                Customers
              </Text>
            </Flex>
          </Link>
          <Link prefetch={false} href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/templates`}>
            <Flex align="center" style={{ textDecoration: "none" }}>
              <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
                Templates
              </Text>
            </Flex>
          </Link>
          <Link
            prefetch={false}
            href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/pricing`}
            passHref
          >
            <Flex align="center" style={{ textDecoration: "none" }} _hover={{ cursor: "pointer" }}>
              <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
                Pricing
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Stack spacing={4} mt={16}>
          <Button
            h={50}
            size="md"
            as="a"
            href={`${process.env.NEXT_PUBLIC_APP_HOST}/log-in`}
            borderRadius={6}
            fontWeight={MOBILE_FONT_WEIGHT}
          >
            Log in
          </Button>
          <Button
            colorScheme="brand"
            size="md"
            h={50}
            as="a"
            href={`${process.env.NEXT_PUBLIC_APP_HOST}/start`}
            borderRadius={6}
            fontWeight={MOBILE_FONT_WEIGHT}
          >
            Get Started For Free
          </Button>
        </Stack>
      </Flex>
      {/* Desktop Navbar */}
      <Container
        position="absolute"
        maxW="landingMax"
        left="50%"
        transform="translateX(-50%)"
        zIndex={15}
        overflowX="hidden"
        display={["none", "none", "block"]}
        px={defaultPx(32)}
      >
        <Flex py={6} direction="row" justify="space-between" alignItems={"center"}>
          {/* Logo */}
          <Link href={process.env.NEXT_PUBLIC_MARKETING_HOST} passHref prefetch={false}>
            <Flex display={["none", "none", "block"]} cursor="pointer">
              <Image h={6} src="/crowd-dev-logo.svg" alt="crowd-dev-logo" />
            </Flex>
          </Link>
          {/* Navigation items */}
          <HStack spacing={[0, 0, 8, 16, 100]} align="center">
            {/* Rest of routes */}
            {ROUTES.map((route) => (
              <DesktopNavItem
                key={route.href}
                {...route}
                isActive={props.activeHref === route.href}
              />
            ))}
          </HStack>
          {/* CTAs */}
          <HStack spacing={4} align="center">
            <Button
              as="a"
              size="landingMd"
              variant="landingOutline"
              href={`${process.env.NEXT_PUBLIC_APP_HOST}/auth/signin`}
            >
              Login
            </Button>
            <Button
              as="a"
              size="landingMd"
              variant="landingSolid"
              href={`${process.env.NEXT_PUBLIC_APP_HOST}/auth/signup`}
            >
              Get Started For Free
            </Button>
          </HStack>
        </Flex>
      </Container>
    </>
  );
}
