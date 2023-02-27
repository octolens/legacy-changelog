import { defaultPx } from "lib/utils/default-container-px";
import { FooterTitle } from "components/core/footer/footer-title";
import { FooterLink } from "components/core/footer/footer-link";
import { FooterSocial } from "./footer-social";
import {
  Box,
  Text,
  Flex,
  Container,
  ContainerProps,
  Grid,
  GridItem,
  Image,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

const gap = [2, 2, 8];

interface Props {
  _wrapper?: ContainerProps;
}

export default function Footer(props: Props) {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper} bgColor="black" paddingTop="10px" color="gray.50" py={20}>
      <Grid
        gap={[6, 6, 4]}
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
        gridTemplateAreas={[
          "'logo logo' 'solution for' 'company legal'",
          "'logo logo' 'solution for' 'company legal'",
          "'logo solution for company legal'",
        ]}
      >
        <GridItem gridArea="logo">
          <VStack align="start" spacing={gap}>
            <Box flexShrink={0}>
              <Image
                src="/crowd-dev-logo-white.svg"
                alt="crowd.dev logo"
                width={100}
              />
            </Box>
            <Text fontSize="sm" color="gray.50">
              An open-source suite of community and data tools built to unlock community-led growth for developer tools.
            </Text>
            <Flex align="center" w="100%">
              <FooterSocial platform="linkedin" />
              <FooterSocial platform="twitter" />
              <FooterSocial platform="github" />
              <FooterSocial platform="discord" />
            </Flex>
          </VStack>
        </GridItem>
        <GridItem gridArea="solution">
          <VStack align="start" spacing={gap}>
            <FooterTitle>Product</FooterTitle>
            <FooterLink
              title="Changelog"
              href="/"
            />
            <FooterLink
              title="Pricing"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/pricing`}
            />
            <FooterLink
              title="Eagle Eye"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/eagle-eye`}
            />
            <FooterLink
              title="Community Help Center"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/community-help-center`}
            />
          </VStack>
        </GridItem>
        <GridItem gridArea="for">
          <VStack align="start" spacing={gap}>
            <FooterTitle>Resources</FooterTitle>
            <FooterLink
              title="All resources"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/resources`}
            />
            <FooterLink
              title="Blog"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/blog`}
            />
            <FooterLink
              title="Docs"
              type="external"
              href="https://docs.crowd.dev"
            />
            <FooterLink
              title="Developers"
              type="external"
              href="https://docs.crowd.dev/reference/getting-started-with-crowd-dev-api"
            />
            <FooterLink
              title="Side projects"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/resources#side-projects`}
            />
            <FooterLink
              title="Events"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/resources#events`}
            />
            <FooterLink
              title="Newsletter"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/newsletter-sign-up`}
            />
          </VStack>
        </GridItem>
        <GridItem gridArea="company">
          <VStack align="start" spacing={gap}>
            <FooterTitle>Solutions</FooterTitle>
            {/* <FooterLink title="Our story" /> */}
            <FooterLink
              title="Founders & Executives"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/crowd-dev-for-founders-executives`}
            />
            <FooterLink
              title="DevRel & Community"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/crowd-dev-for-devrel-and-community`}
            />
            <FooterLink
              title="Go-to-market"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/crowd-dev-for-go-to-market-teams`}
            />

          </VStack>
        </GridItem>
        <GridItem gridArea="legal">
          <VStack align="start" spacing={gap}>
            <FooterTitle>Company</FooterTitle>
            <FooterLink
              title="About us"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/about-us`}
            />
            <FooterLink
              title="Contact"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/contact`}
            />
            <FooterLink
              title="Book a demo"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/book-a-demo`}
            />
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
