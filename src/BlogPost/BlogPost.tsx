import * as React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

export const BlogPost: React.FC = () => {
  const { slug } = useParams();

  return (
    <Box>
      <Heading>{slug}</Heading>
    </Box>
  );
};
