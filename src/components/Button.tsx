import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'blue' | 'gray';
  width?: number;
}

export function Button({ title, variant = 'blue', width = 100, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w={width}
      h={14}
      bg={variant === 'gray' ? 'gray.200' : 'blue.500'}
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