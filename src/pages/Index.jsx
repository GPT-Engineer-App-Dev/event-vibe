import { Container, Text, VStack, Heading, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { FaCalendarPlus, FaListAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Events Management App</Heading>
        <Text fontSize="lg" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaCalendarPlus />} colorScheme="teal" size="lg" onClick={() => navigate("/create")}>
            Create Event
          </Button>
          <Button leftIcon={<FaListAlt />} colorScheme="teal" size="lg" onClick={() => navigate("/events")}>
            View Events
          </Button>
        </HStack>
      {session ? (
          <Button colorScheme="teal" size="lg" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button colorScheme="teal" size="lg" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;