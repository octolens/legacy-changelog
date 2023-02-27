import { Flex, Box, Image } from '@chakra-ui/react';

export interface CenteredImageProps {
    maxWidth?: string;
    src: string;
    center?: boolean;
}

const CenteredImage = (props) => {
    return (
        <Flex width="100%" height="100%" justify="left" alignItems={props.center ? 'center' : 'left'} my={7}>
            <Box width="100%" height="100%" maxWidth={props.maxWidth || '50%'} rounded="xl" overflow="hidden" shadow="lg">
                <Image src={props.src} width="100%" height="100%" />
            </Box>
        </Flex>
    );
};

export default CenteredImage;