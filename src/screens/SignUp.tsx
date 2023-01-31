import {
  VStack,
  Image,
  Text,
  Center,
  ScrollView,
  IconButton,
  HStack,
} from "native-base";

import LogoSvg from "@assets/logo.svg";
import userPhoto from "@assets/userPhotoDefault.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Center mt={58} px={12}>
          <LogoSvg />
          <Text color="gray.700" fontSize="24" fontFamily="heading">
            Boas vindas!
          </Text>
          <Text
            color="gray.400"
            fontSize="md"
            fontFamily="body"
            textAlign="center"
          >
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>
          <HStack>
            <Image
              source={userPhoto}
              alt="Foto do usuário"
              mt="4"
              mb="4"
              position="relative"
              borderColor="blue.500"
              borderWidth="4"
              borderRadius="50"
            />
            <IconButton
              size={39}
              bg="blue.500"
              borderRadius="full"
              position="absolute"
              bottom={4}
              right={-10}
              variant="solid"
              _icon={{
                as: MaterialIcons,
                name: "create",
                color: "white",
                size: 22,
              }}
            />
          </HStack>

          <Input
            placeholder="Nome"
            autoCapitalize="none"
          />
          
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            placeholder="Telefone"
            keyboardType="phone-pad"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secret={true} />
          <Input placeholder="Confirmar senha" secret={true} />
          <Button title="Entrar" variant="blue" />
        </Center>
        <Center px={12} pt={6} pb={24}>
          <Text color="gray.400" fontSize="md" fontFamily="body">
            Já tem uma conta?
          </Text>
          <Button title="Ir para o login" variant="gray" mt={2} onPress={handleGoBack} />
        </Center>
      </VStack>
    </ScrollView>
  );
}
