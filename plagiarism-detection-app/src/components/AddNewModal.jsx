import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Spinner,
  Text,
} from "@chakra-ui/react";

function AddNewModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);
    setResponse(null);

    try {
      // Simulate backend call
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://your-backend-url.com/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResponse(data.message || "File uploaded successfully!");
    } catch (error) {
      setResponse("Failed to upload file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Document</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            {isLoading ? (
              <Spinner size="lg" color="teal.500" />
            ) : (
              <>
                <Button
                  as="label"
                  htmlFor="file-upload"
                  colorScheme="teal"
                  cursor="pointer"
                >
                  Upload File
                  <input
                    id="file-upload"
                    type="file"
                    accept=".txt,.pdf,.docx"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                </Button>
                {response && <Text color="gray.600">{response}</Text>}
              </>
            )}
          </VStack>
        </ModalBody>
        <ModalFooter>
          {/*<Button onClick={onClose} colorScheme="red">*/}
          {/*  Close*/}
          {/*</Button>*/}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddNewModal;
