import { useState, useEffect } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEvent, useUpdateEvent } from "../integrations/supabase/index.js";

const EditEvent = () => {
  const { id } = useParams();
  const { data: event, isLoading } = useEvent(id);
  const updateEventMutation = useUpdateEvent();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (event) {
      setTitle(event.name);
      setDescription(event.description);
      setDate(event.date);
    }
  }, [event]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedEvent = {
      id,
      title,
      description,
      date,
    };
    await updateEventMutation.mutateAsync(updatedEvent);
    navigate("/events");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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