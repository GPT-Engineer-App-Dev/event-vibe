import { useState, useEffect } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = ({ events, updateEvent }) => {
  const { id } = useParams();
  const event = events.find((event) => event.id === id);
  const [title, setTitle] = useState(event ? event.title : "");
  const [description, setDescription] = useState(event ? event.description : "");
  const [date, setDate] = useState(event ? event.date : "");
  const navigate = useNavigate();

  useEffect(() => {
    if (!event) {
      navigate("/events");
    }
  }, [event, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      id,
      title,
      description,
      date,
    };
    updateEvent(updatedEvent);
    navigate("/events");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Edit Event</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">Update Event</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default EditEvent;