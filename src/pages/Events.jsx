import { useState } from "react";
import { Container, Heading, VStack, Box, Text, HStack, IconButton, Button } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Events = ({ events, deleteEvent }) => {
  const navigate = useNavigate();

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Events</Heading>
        {events.length === 0 ? (
          <Text>No events available. Create one!</Text>
        ) : (
          events.map((event) => (
            <Box key={event.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <Text fontSize="xl" fontWeight="bold">{event.title}</Text>
                  <Text>{event.description}</Text>
                  <Text>{event.date}</Text>
                </VStack>
                <HStack>
                  <IconButton icon={<FaEdit />} onClick={() => navigate(`/edit/${event.id}`)} />
                  <IconButton icon={<FaTrash />} onClick={() => deleteEvent(event.id)} />
                </HStack>
              </HStack>
            </Box>
          ))
        )}
        <Button colorScheme="teal" onClick={() => navigate("/create")}>Create New Event</Button>
      </VStack>
    </Container>
  );
};

export default Events;