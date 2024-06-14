import { Container, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find((event) => event.id === id);
  const navigate = useNavigate();

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
        <Heading as="h2" size="xl">{event.title}</Heading>
        <Text>{event.description}</Text>
        <Text>{event.date}</Text>
        <Button colorScheme="teal" onClick={() => navigate("/events")}>Back to Events</Button>
      </VStack>
    </Container>
  );
};

export default EventDetails;