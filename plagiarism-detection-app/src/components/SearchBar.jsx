import React from "react";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";

function SearchBar({ placeholder, onChange }) {
  return (
      <InputGroup mb={6}
                  maxW='50vw'
                  mx='auto'>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.700' />
        </InputLeftElement>
        <Input variant='filled'
               placeholder='Search for document'
               borderRadius='full' />
      </InputGroup>
  );
}

export default SearchBar;
