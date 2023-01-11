import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'blue' | 'gray';
}

export function Button({ title, variant = 'blue', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === 'gray' ? 'gray.100' : 'blue.500'}
      rounded="sm"
      _pressed={{
        bg: variant === 'gray' ? 'gray.200' : 'blue.700'  
      }}
      {...rest}
    >
      <Text 
        color={variant === 'gray' ? 'gray.600' : 'white'}
        fontFamily="heading"
        fontSize="md"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}