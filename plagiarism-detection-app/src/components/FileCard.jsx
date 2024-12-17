import React from "react";
import { Box, HStack, VStack, Text, Menu, MenuList, MenuItem, IconButton, MenuButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function FileCard({ name, lastAccessed, onRename, onDelete }) {
  return (
    <Box borderWidth="1px"
         borderRadius="md"
         overflow="hidden"
         height="25vh"
         bg="gray.50"
         shadow="sm"
         _hover={{ shadow: "md" }}>
      <Box p={3}
           height="17vh"
           bg="gray.100">

      </Box> {/* Placeholder */}
      <HStack p={3}
              justify="space-between"
              align="center">
        <VStack align="start"
                spacing={0}>
          <Text fontWeight="bold"
                fontSize="sm">
            {name}
          </Text>
          <Text fontSize="xs"
                color="gray.500">
            {lastAccessed}
          </Text>
        </VStack>
        <Menu>
          <MenuButton as={IconButton}
                      aria-label='more options'
                      icon={<HamburgerIcon />} size="sm" />
          <MenuList>
            <MenuItem onClick={onRename}>Rename</MenuItem>
            <MenuItem onClick={onDelete}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default FileCard;
