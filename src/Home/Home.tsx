import * as React from "react";
import { Button, Heading, forwardRef, Box, BoxProps } from "@chakra-ui/react";

export const Home: React.FC = () => {
  const Card = forwardRef<BoxProps, "div">((props, ref) => (
    <Box px="4" py="5" rounded="sm" shadow="lg" ref={ref} {...props} />
  ));

  return (
    <Box>
      <Heading
        fontWeight="500"
        letterSpacing="1px"
        textTransform="uppercase"
        as="h2"
      >
        Hello
      </Heading>

      <Card colorScheme="gray.200">I'm a card</Card>

      <Button colorScheme="blue">Click me</Button>
    </Box>
  );
};
