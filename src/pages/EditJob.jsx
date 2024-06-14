import { useState, useEffect } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useJob, useUpdateJob } from "../integrations/supabase/index.js";

const EditJob = () => {
  const { id } = useParams();
  const { data: job, isLoading } = useJob(id);
  const updateJobMutation = useUpdateJob();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (job) {
      setTitle(job.title);
      setDescription(job.description);
    }
  }, [job]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedJob = {
      id,
      title,
      description,
    };
    await updateJobMutation.mutateAsync(updatedJob);
    navigate("/jobs");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Edit Job</Heading>
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
            <Button type="submit" colorScheme="teal" width="full">Update Job</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default EditJob;