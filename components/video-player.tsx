import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
import { Box, AspectRatio } from '@chakra-ui/react';

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

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