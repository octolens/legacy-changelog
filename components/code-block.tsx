import React from "react";
import {CopyBlock, solarizedDark } from "react-code-blocks";
import {Text, Box, Button, Collapse} from "@chakra-ui/react";

const CustomCodeBlock = (props) => {
  // if any language selected or javascript by default

  const { className, children } = props;

  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  if (!className) {
    return <Text as="code" color="#E94F2E"  fontSize={"sm"} {...props} />
  }

  const language = className.match(/(?<=language-)(\w.*?)\b/) != null
    ? className.match(/(?<=language-)(\w.*?)\b/)[0]
    : "javascript";

  return (
    <Box>
        <Box mt={2} rounded="lg" overflow={"hidden"} shadow="md" fontSize={"small"}>
            <Collapse in={show} startingHeight={150}>
                <CopyBlock
                    text={children}
                    language={language}
                    theme={solarizedDark}
                    wrapLines
                    codeBlock
                />
            </Collapse>
            <Button onClick={handleToggle} fontSize="xs" margin={0} border={"none"}>
                show {show ? "less" : "more"}
            </Button>
        </Box>
    </Box>
  )
};

export default CustomCodeBlock;