import { Flex, Box, Image } from '@chakra-ui/react';

export interface CenteredImageProps {
    maxWidth: string;
    src: string;
}

const CenteredImage = (props) => {
    return (
        <Flex width="100%" height="100%" justify="center" alignItems="center" marginBottom={10}>
            <Box width="100%" height="100%" maxWidth={props.maxWidth} rounded="xl" overflow="hidden" shadow="lg">
                <Image src={props.src} width="100%" height="100%" />
            </Box>
        </Flex>
    );
};

export default CenteredImage;