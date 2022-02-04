import * as React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
} from "@chakra-ui/react";

import { BlogPost } from "./BlogPost/BlogPost";
import { Blog } from "./Blog/Blog";
import { Resume } from "./Resume/Resume";
import { Portfolio } from "./Portfolio/Portfolio";
import { Home } from "./Home/Home";

import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { Logo } from "./Logo";
import logo from "./logo.svg";

export const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog">Blog</RouterLink>
          </li>
          <li>
            <RouterLink to="/resume">Résumé</RouterLink>
          </li>
          <li>
            <RouterLink to="/portfolio">Portfolio</RouterLink>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
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
