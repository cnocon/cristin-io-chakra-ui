import * as React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import {
  ChakraProvider,
  useColorModeValue,
  Container,
  Box,
  Flex,
  Text,
  Divider,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";

import { BlogPost } from "./BlogPost/BlogPost";
import { Blog } from "./Blog/Blog";
import { Resume } from "./Resume/Resume";
import { Portfolio } from "./Portfolio/Portfolio";
import { Home } from "./Home/Home";

import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { Logo } from "./Logo";
import logo from "./logo.svg";

const date = new Date();

const NavItem: React.FC = ({ children }) => {
  return (
    <Text fontSize="lg" fontFamily="accent" fontWeight="600">
      {children}
    </Text>
  );
};

interface IWrapperProps {
  children?: any;
  options?: Object;
}

const Wrapper: React.FC<IWrapperProps> = ({ children, options }) => {
  return (
    <Container {...options} p={0} m={0} maxW="full">
      {children}
    </Container>
  );
};

const WrapperInner: React.FC<IWrapperProps> = ({ children, options }) => {
  return (
    <Container px="5" py="2" mx="auto" maxW="container.xl" {...options}>
      {children}
    </Container>
  );
};

export const App = () => (
  <Router>
    <Flex
      h="full"
      w="full"
      mx="auto"
      height="100vh"
      alignItems="space-between"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Wrapper
        options={{
          bg: useColorModeValue("gray.100", "gray.700"),
          color: useColorModeValue("brand.700", "brand.900"),
        }}
      >
        <WrapperInner>
          <HStack spacing="5" my="5">
            <Heading fontFamily="brand" as="h1">
              Cristin O'Connor
            </Heading>
            <Spacer />
            <RouterLink to="/">
              <NavItem>Home</NavItem>
            </RouterLink>
            <RouterLink to="/blog">
              <NavItem>Blog</NavItem>
            </RouterLink>
            <RouterLink to="/resume">
              <NavItem>Résumé</NavItem>
            </RouterLink>
            <RouterLink to="/portfolio">
              <NavItem>Portfolio</NavItem>
            </RouterLink>

            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
        </WrapperInner>
      </Wrapper>

      <Divider alignSelf="flexStart" />

      <Wrapper
        options={{
          flexGrow: "1",
          bg: useColorModeValue("gray.50", "gray.700"),
        }}
      >
        <WrapperInner options={{ py: "10" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </WrapperInner>
      </Wrapper>

      <Wrapper
        options={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("brand.400", "brand.200est"),
        }}
      >
        <WrapperInner>
          <Flex alignItems="center">
            <Text as="p" marginRight="3" fontSize="md">
              Copyright &copy; {date.getFullYear()}
            </Text>
            <Text fontFamily="brand" as="p" fontSize="md" fontWeight="600">
              <RouterLink to="/">Cristin O'Connor</RouterLink>
            </Text>
          </Flex>
          <Flex>
            <Text as="p" fontFamily="body" fontSize="sm" fontWeight="600">
              <Link fontSize="sm" to="mailto:her@cristin.io">
                her@cristin.io
              </Link>
              &nbsp;|&nbsp;
              <Link
                fontSize="sm"
                to="https://www.linkedin.com/in/cristinoconnor/"
                target="_blank"
              >
                LinkedIn
              </Link>
              &nbsp;|&nbsp;
              <Link
                fontSize="sm"
                to="https://www.github.com/cnocon/"
                target="_blank"
              >
                GitHub
              </Link>
            </Text>
          </Flex>
        </WrapperInner>
      </Wrapper>
    </Flex>
  </Router>
);

// export const App = () => (
//   <Box textAlign="center" fontSize="xl">
//     <Grid minH="100vh" p={3}>
//       <ColorModeSwitcher justifySelf="flex-end" />
//       <VStack spacing={8}>
//         <Logo h="40vmin" pointerEvents="none" />
//         <Heading colorScheme="brand">
//           Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
//         </Heading>
//         <Link
//           color="teal.500"
//           href="https://chakra-ui.com"
//           fontSize="2xl"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Chakra
//         </Link>
//       </VStack>
//     </Grid>
//   </Box>
// );
