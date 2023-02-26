import { Button, Image, Text, Link } from '@chakra-ui/react';

export interface CenteredImageProps {
    number: string;
}

const PullRequest = (props) => {
    return (
        <Link href={`https://github.com/CrowdDotDev/crowd.dev/pull/${props.number}`} style={{ textDecoration: 'none' }}>
            <Button variant="outline" outline="none" flex="wrap" alignItems="center">
                <Image src="/pull-request.svg" alt="Github" width="4" height="4" mr={1} />
                <Text fontSize="sm" fontFamily="mono" color="gray.600">
                    #{props.number}
                </Text>
            </Button>
        </Link>
    );
};

export default PullRequest;