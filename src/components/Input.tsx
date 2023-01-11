import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  IconButton,
  Icon,
  Text,
} from "native-base";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = IInputProps & {
  secret?: boolean;
  errorMessage?: string | null;
};

export function Input({
  secret = false,
  errorMessage = null,
  isInvalid,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;
  const [visibility, setVisibility] = useState(false);

  function handleChangeVisibility() {
    setVisibility((prev) => !prev);
  }

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="white"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="gray.300"
        fontFamily="body"
        placeholderTextColor="gray.300"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bgColor: "white",
          borderWidth: 1,
          borderColor: "blue.500",
        }}
        secureTextEntry={secret && !visibility}
        {...rest}
      />
      {secret && !visibility ? (
        <IconButton
          icon={<Icon as={MaterialIcons} name="visibility" color="gray.300" />}
          position="absolute"
          right={2}
          top={2}
          onPress={handleChangeVisibility}
        />
      ) : (
        secret &&
        visibility && (
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="visibility-off" color="gray.300" />
            }
            position="absolute"
            right={2}
            top={2}
            onPress={handleChangeVisibility}
          />
        )
      )}

      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
