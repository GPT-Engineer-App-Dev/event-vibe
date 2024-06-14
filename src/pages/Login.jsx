import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, VStack, Heading } from '@chakra-ui/react';
import { SupabaseAuthUI, useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Login</Heading>
        <SupabaseAuthUI />
      </VStack>
    </Container>
  );
};

export default Login;