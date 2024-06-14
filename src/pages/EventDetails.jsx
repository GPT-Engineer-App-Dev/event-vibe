import { Container, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEvent } from "../integrations/supabase/index.js";

const EventDetails = () => {
  const { id } = useParams();
  const { data: event, isLoading } = useEvent(id);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return (
      <Container centerContent>
        <Heading as="h2" size="xl">Event Not Found</Heading>
        <Button mt={4} colorScheme="teal" onClick={() => navigate("/events")}>Back to Events</Button>
      </Container>
    );
  }

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">{event.name}</Heading>
        <Text>{event.description}</Text>
        <Text>{event.date}</Text>
        <Button colorScheme="teal" onClick={() => navigate("/events")}>Back to Events</Button>
      </VStack>
    </Container>
  );
};

export default EventDetails;