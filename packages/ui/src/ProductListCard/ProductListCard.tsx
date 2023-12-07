import {
  Button,
  View,
  Text,
  XStack,
  Image,
  Card,
  H2,
  H3,
  useMedia,
  styled,
  useWindowDimensions,
} from 'tamagui'
import { useRouter } from 'solito/router'

export function ListCard(props) {
  const media = useMedia()
  const { width } = useWindowDimensions()
  const { push } = useRouter()

  const onProductCardPress = (id) => {
    push(`/products/${id}`)
  }

  if (media.sm) {
    return (
      <XStack
        onPress={() => onProductCardPress(props.product.id)}
        justifyContent='space-between'
        width={width}
        marginBottom={10}
        paddingRight={10}
      >
        <XStack
        >
          <Image
            resizeMode="cover"
            alignSelf="center"
            height={35}
            width={35}
            overflow="hidden"
            marginRight={15}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/107/107804.png' }}
          />
          <Image
            resizeMode="cover"
            alignSelf="center"
            height={50}
            width={50}
            overflow="hidden"
            marginRight={15}
            source={{ uri: props.product.image }}
          />
          <View style={{ minWidth: 150 }} justifyContent="center" flexDirection="column">
            <Text>{props.product.productName}</Text>
            <Text>{`${props.product.price}$`}</Text>
          </View>
        </XStack>
        <Button borderRadius={18} height={40} borderWidth={1}>
          Buy
        </Button>
      </XStack>
    )
  } else {
    return (
      <Card
        onPress={() => onProductCardPress(props.product.id)}
        elevate
        size="$4"
        width={250}
        height={250}
        bordered
        {...props}
      >
        <Card.Header padded>
          <H2>{props.product.productName}</H2>
          <H3>{`${props.product.price}$`}</H3>
        </Card.Header>
        <Card.Footer justifyContent="space-between" padded>
          <Image
            resizeMode="cover"
            alignSelf="center"
            height={35}
            width={35}
            overflow="hidden"
            marginRight={15} 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/107/107804.png' }}
          />
          <Button borderRadius="$10">
            <Text>Buy</Text>
          </Button>
        </Card.Footer>
        <Card.Background>
          <Image
            resizeMode="cover"
            alignSelf="center"
            height="100%"
            width="100%"
            overflow="hidden"   
            source={{ uri: props.product.image }}
          />
        </Card.Background>
      </Card>
    )
  }
}

export const ProductListCard = styled(ListCard, {
  size: {
    '...size': (size, { tokens }) => {
      return {
        width: tokens.size[size] ?? size,
        height: tokens.size[size] ?? size,
      }
    },
  },
})
