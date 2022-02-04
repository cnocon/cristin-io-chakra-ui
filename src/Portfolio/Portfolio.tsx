import * as React from "react";
import { Box, Heading, VStack, useColorModeValue } from "@chakra-ui/react";

export const Portfolio: React.FC = () => {
  return (
    <Box>
      <Heading
        fontWeight="500"
        letterSpacing="1px"
        textTransform="uppercase"
        as="h2"
      >
        Portfolio
      </Heading>
    </Box>
  );
};
