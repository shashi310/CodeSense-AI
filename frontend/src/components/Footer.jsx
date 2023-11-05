import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
const Footer = () => {
  return (
    <Box padding={"10px 20px 10px 20px"} bg={"#242424"} color={"orange.500"} h="50px">
      <Stack
        direction={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"space-around"}
      >
        <Text>All the best✌️</Text>
      </Stack>
    </Box>
  );
};

export default Footer;
