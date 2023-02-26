import ReactPlayer from 'react-player';
import { Box, AspectRatio } from '@chakra-ui/react';

export interface VideoPlayerProps {
  url: string;
  playing: boolean;
}

const VideoPlayer = (props) => {
  return (
    <Box width="100%" height="100%" maxWidth="5xl" rounded="xl" overflow="hidden" shadow="lg">
      <AspectRatio maxW='5xl' ratio={1.7777777778}>
        <ReactPlayer url={props.url}
          controls={false}
          muted={true}
          width="100%"
          height="100%"
          playing={props.playing}
        />
      </AspectRatio>
    </Box>
  );
};

export default VideoPlayer;