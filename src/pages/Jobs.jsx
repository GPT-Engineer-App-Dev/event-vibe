import { useJobs, useDeleteJob } from "../integrations/supabase/index.js";
import { Container, Heading, VStack, Box, Text, HStack, IconButton, Button } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const { data: jobs, isLoading } = useJobs();
  const deleteJobMutation = useDeleteJob();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await deleteJobMutation.mutateAsync(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Jobs</Heading>
        {jobs.length === 0 ? (
          <Text>No jobs available. Create one!</Text>
        ) : (
          jobs.map((job) => (
            <Box key={job.id} p={4} borderWidth="1px" borderRadius="lg" width="100%" onClick={() => navigate(`/job/${job.id}`)} cursor="pointer">
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <Text fontSize="xl" fontWeight="bold">{job.title}</Text>
                  <Text>{job.description}</Text>
                </VStack>
                <HStack>
                  <IconButton icon={<FaEdit />} onClick={() => navigate(`/edit-job/${job.id}`)} />
                  <IconButton icon={<FaTrash />} onClick={() => handleDelete(job.id)} />
                </HStack>
              </HStack>
            </Box>
          ))
        )}
        <Button colorScheme="teal" onClick={() => navigate("/create-job")}>Create New Job</Button>
      </VStack>
    </Container>
  );
};

export default Jobs;