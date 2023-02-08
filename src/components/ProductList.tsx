import { Center, HStack, Icon, Input, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export function ProductList() {
  return (
    <VStack>
      <Text mx={6} mt={8} mb={4} color="gray.400" fontSize="md">
        Seus produtos anunciados para venda
      </Text>
      <HStack px={8}>
        <Input
          w={{
            base: "75%",
            md: "25%",
          }}
          InputRightElement={
            <Icon
              as={<MaterialIcons name="search" />}
              size={5}
              ml="2"
              color="gray.600"
            />
          }
          placeholder="Pesquisar"
        />
      </HStack>
    </VStack>
  );
}
