import { Heading, HStack, Icon, Text, VStack, Pressable } from "native-base";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProductList } from "@components/ProductList";

export function Home() {
  return (
    <VStack flex={1}>
      <HStack pt={16} pb={5} px={6} mb={8} alignItems="center" style={{ backgroundColor: "rgba(100, 122, 199, 0.2)" }}>
        <UserPhoto
          source={{ uri: "https://github.com/djalmahenry.png" }}
          size={16}
          alt="Imagem do usuário"
          mr={4}
        />

        <VStack flex={1}>
          <Text color="gray.600" fontSize="md">
            Boas vindas,
          </Text>

          <Heading color="gray.600" fontSize="md" fontFamily="heading">
            Djalma
          </Heading>
        </VStack>

        <TouchableOpacity>
          <Button
            width={140}
            title="Criar anúncio"
            variant="blue"
            onPress={() => console.log("clique")}
          />
        </TouchableOpacity>
      </HStack>

      <Text mx={6} mb={4} color="gray.400" fontSize="md">
        Seus produtos anunciados para venda
      </Text>

      <Pressable
        flexDirection="row"
        px={4}
        py={5}
        mx={8}
        borderRadius={10}
        style={{ backgroundColor: "rgba(100, 122, 199, 0.2)" }}
        alignItems="center"
      >
        <Icon
          as={<MaterialCommunityIcons name="tag-outline" />}
          size={8}
          color="blue.500"
          mr={4}
        />

        <VStack flex={1}>
          <Heading color="gray.600" fontSize="xl">
            4
          </Heading>

          <Text color="gray.400" fontSize="md">
            anúncios ativos
          </Text>
        </VStack>
        <Heading color="blue.700" fontSize="md">
          Meus anúncios
        </Heading>
        <Icon
          color="blue.700"
          size={6}
          as={<MaterialCommunityIcons name="chevron-right" />}
        />
      </Pressable>

      <ProductList />
    </VStack>
  );
}
