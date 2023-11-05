import React from "react";
import { Box, Container, HStack, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg={"#191259"} h="60px">
      <Container maxW={"8xl"} >
        <HStack>
          <Text paddingTop="6px" fontWeight={"bold"} fontSize={"30px"} color={"tomato"}>CodeSense-AI</Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
