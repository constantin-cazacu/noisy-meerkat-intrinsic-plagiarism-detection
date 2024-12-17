import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function AddNewCard({ onClick }) {
  return (
    <Box as="button"
         borderWidth="2px"
         borderStyle="dashed"
         borderColor="gray.300"
         borderRadius="md"
         height="25vh"
         display="flex"
         alignItems="center"
         justifyContent="center"
         onClick={onClick}>
      <VStack spacing={2}>
        <AddIcon
            boxSize={6}
            color="teal.500" />
        <Text color="gray.500">Add New</Text>
      </VStack>
    </Box>
  );
}

export default AddNewCard;
