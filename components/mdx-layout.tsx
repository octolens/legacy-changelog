import {
  Box,
  Divider,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  Button,
  VStack,
  Flex
} from "@chakra-ui/react";
import VideoPlayer from "./video-player";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "@mdx-js/react/lib";
import dayjs from "dayjs";
import type { MDXComponents } from "mdx/types";
import Head from "next/head";
import Link from "next/link";
import { Contributor } from "components/contributor";
import Footer from "components/core/footer";
import Navbar from "components/core/navbar";
import { TryBanner } from "components/core/try-banner";
import PullRequest from "components/pull-request";
import { MdxMeta } from "lib/models/mdx-meta";
import { defaultPx } from "lib/utils/default-container-px";

const components: MDXComponents = {
  h1: (props) => <Heading as="h1" fontSize={["2xl", "2xl", "3xl"]} color="#000" {...props} />,
  h2: (props) => <Text fontWeight="bold" fontSize="xl" mt={12} mb={6} {...props} />,
  h3: (props) => <Text fontWeight="medium" fontSize="lg" mt={6} mb={1} {...props} />,
  p: (props) => <Text my={3} {...props} />,
  a: (props) => (
    <Text as="a" href={props.href} rel="noopener noreferrer" color="#E94F2E" fontWeight="bold">
      {props.children}
    </Text>
  ),
  ul: (props) => <UnorderedList spacing={4} {...props} />,
  ol: (props) => <OrderedList spacing={4} {...props} />,
  li: (props) => <ListItem _before={{ content: "unset" }} {...props} />,
};
export interface MdxLayoutProps {
  meta: MdxMeta;
  children: ReactNode;
  hideLayout?: boolean;
  hideHead?: boolean;
  hideAuthors?: boolean;
  blockAutoplay?: boolean;
}

export const MdxLayout = (props: MdxLayoutProps) => {
  const title = `${props.meta.title} | crowd.dev | Changelog`;
  const description = "Discover new updates and improvements to crowd.dev.";
  const url = "https://changelog.crowd.dev";

  return (
    <MDXProvider components={components}>
      {!props.hideHead && (
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content={title} />
          <meta name="description" content={description} />
          <meta name="image" content={props.meta.headerImage} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={props.meta.headerImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={url} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={props.meta.headerImage} />
        </Head>
      )}
      <Box>
        {!props.hideLayout && <Navbar />}
        <Box w="full" maxW="100vw" overflow="hidden" zIndex="docked">
          <Box mt={!props.hideLayout && [86, 86, 140]} maxW="5xl" mx="auto" px={defaultPx(32)}>
            {/* Article header */}
            <VStack align="start" spacing={[4, 4, 6]}>
              <VStack align="start" width="full">
                <Flex justify="space-between" w="full">

                  <Text fontSize="sm" color="landing.gray">
                    {dayjs(props.meta.publishedAt).format("MMM Do YYYY")}
                  </Text>
                  <Link href={`https://github.com/CrowdDotDev/crowd.dev/releases/tag/${props.meta.version}`}>
                    <Button variant="outline" outline="none" flex="wrap" alignItems="center">
                      <Image src="/tag.svg" alt="Github" width="4" height="4" mr={1} />
                      <Text fontSize="sm" fontFamily="mono" color="gray.600">
                        {props.meta.version}
                      </Text>
                    </Button>
                  </Link>
                </Flex>

                <Flex justify="space-between" w="full">
                  <Link href={`/changelogs/${props.meta.slug}`}>
                    <Heading
                      as="h1"
                      fontSize={["2xl", "2xl", "32px"]}
                      fontWeight="semibold"
                      color="#000"
                      cursor="pointer"
                      _hover={{
                        textDecor: "underline",
                      }}
                    >
                      {props.meta.title}
                    </Heading>
                  </Link>
                  <PullRequest number={props.meta.mainPullRequest} />
                </Flex>
              </VStack>
              {props.meta.headerVideo ? (
                <VideoPlayer url={props.meta.headerVideo} playing={!props.blockAutoplay} />
              ) : (
                <Image
                  borderRadius="md"
                  src={props.meta.headerImage}
                  alt={props.meta.title}
                  w="full"
                />
              )}

            </VStack>
            {/* Article content */}
            <Box px={[6]} pt={[10]} fontSize="md" lineHeight="32px" color="landing.almostBlack.500">
              {props.children}
            </Box>
            {/* Article authors */}
            {!props.hideAuthors && (
              <>
                <Divider mt={16} mb={8} />
                <VStack px={[6]} align="start" spacing={4}>
                  {props.meta.authors.map((author) => (
                    <Contributor key={author.name} {...author} />
                  ))}
                </VStack>
              </>
            )}
          </Box>
          {!props.hideLayout && (
            <>
              <TryBanner _wrapper={{ mt: [50, 50, 120] }} />
            </>
          )}
        </Box>
      </Box>
      {!props.hideLayout && (
        <Footer _wrapper={{ mt: 20, mb: 20 }} />
      )}
    </MDXProvider>
  );
};
