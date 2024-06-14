import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import { useAddEvent } from "../integrations/supabase/index.js";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const addEventMutation = useAddEvent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      name: title,
      description,
      date,
    };
    await addEventMutation.mutateAsync(newEvent);
    navigate("/events");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Create Event</Heading>
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
            <Button type="submit" colorScheme="teal" width="full">Create Event</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default CreateEvent;