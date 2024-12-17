import React, {useState} from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
import FileCard from "../components/FileCard";
import AddNewCard from "../components/AddNewCard";
import AddNewModal from "../components/AddNewModal";

function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false)

  const files = [
    { name: "File 1", lastAccessed: "Dec 10, 2024" },
    { name: "File 2", lastAccessed: "Dec 8, 2024" },
    { name: "File 3", lastAccessed: "Dec 5, 2024" },
    // Add more files as needed
  ];

  const handleAddNew = () => {
    setModalOpen(true);
  };
  
  const handleModalClose = () => {
    setModalOpen(false);
  }

  const handleRename = (name) => {
    console.log(`Rename file: ${name}`);
  };

  const handleDelete = (name) => {
    console.log(`Delete file: ${name}`);
  };

  return (
    <Box p={5}>
      <SearchBar placeholder="Search documents" />
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
        <AddNewCard onClick={handleAddNew} />
        {files.map((file, index) => (
          <FileCard
            key={index}
            name={file.name}
            lastAccessed={file.lastAccessed}
            onRename={() => handleRename(file.name)}
            onDelete={() => handleDelete(file.name)}
          />
        ))}
      </SimpleGrid>

      <AddNewModal isOpen={isModalOpen}
                   onClose={handleModalClose} />
    </Box>
  );
}

export default HomePage;
