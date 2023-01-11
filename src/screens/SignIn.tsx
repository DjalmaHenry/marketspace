import { VStack, Image, Text, Center, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <VStack flex={3} bg="gray.100" borderBottomRadius={30}>
          <Center my={24} px={12}>
            <LogoSvg />
            <Text color="gray.700" fontSize="37" fontFamily="heading">
              Marketspace
            </Text>
            <Text color="gray.400" fontSize="md" fontFamily="body">
              Seu espaço de compra e venda
            </Text>
            <Text
              mt="24"
              mb="4"
              color="gray.600"
              fontSize="md"
              fontFamily="body"
            >
              Acesse sua conta
            </Text>
            <Input
              placeholder="E-mail"
              mb="2"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secret={true} />
            <Button title="Entrar" mt="4" variant="blue" />
          </Center>
        </VStack>
        <VStack flex={1}>
          <Center px={12} pt={12} pb={24}>
            <Text color="gray.400" fontSize="md" fontFamily="body">
              Ainda não tem acesso?
            </Text>
            <Button title="Criar uma conta" mt="4" variant="gray" />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
