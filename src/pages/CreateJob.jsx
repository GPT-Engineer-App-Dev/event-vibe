import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import { useAddJob } from "../integrations/supabase/index.js";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addJobMutation = useAddJob();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = {
      title,
      description,
    };
    await addJobMutation.mutateAsync(newJob);
    navigate("/jobs");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Create Job</Heading>
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
            <Button type="submit" colorScheme="teal" width="full">Create Job</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default CreateJob;