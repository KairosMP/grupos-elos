import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Select,
  Button,
} from '@chakra-ui/react';

import  {useState}  from 'react';

import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    cpf: '',
    fone: '',
    cep: '',
    publicPlace: '',
    neighborhood: '',
    city: '',
    state: '',
    number: '',
  });

  const formSubmitCallback = () => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/Forms', form)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="#283CA1"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Clube POP
      </Center>
      <Flex align="center" justify="center" bg="blackAlpha.200" h="calc(100vh - 150px)">
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <form style={{
            width: '100vw'
          }} onSubmit={formSubmitCallback}>
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="userName">Nome Completo</FormLabel>
                  <Input id="userName" onChange={handleInputChange} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input id="email" type="email" onChange={handleInputChange} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="cpf">CPF</FormLabel>
                  <Input id="cpf" onChange={handleInputChange} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="fone">Telefone</FormLabel>
                  <Input id="fone" type="tel" onChange={handleInputChange} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="cep">Cep</FormLabel>
                  <Input id="cep" type="number" onChange={handleInputChange} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="publicPlace">Logradouro</FormLabel>
                  <Input id="publicPlace" onChange={handleInputChange} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="neighborhood">Bairro</FormLabel>
                  <Input id="neighborhood" onChange={handleInputChange} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="city">Cidade</FormLabel>
                  <Input id="city" onChange={handleInputChange} />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel>Estados</FormLabel>
                  <Select placeholder="Escolha um estado" onChange={handleInputChange} id='state'>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </Select>
                </Box>
                <Box w="20%">
                  <FormLabel htmlFor="number">numero</FormLabel>
                  <Input id="number" onChange={handleInputChange}/>
                </Box>
              </HStack>
              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="#283CA1"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: '#2B3D6D' }}
                >
                  Enviar
                </Button>
              </HStack>
            </FormControl>
          </form>
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
