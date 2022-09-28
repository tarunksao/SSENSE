import {
	Box,
	Container,
	Flex,
	Heading,
	Link,
	Spacer,
	Text,
} from '@chakra-ui/react';

function Navbar() {
	return (
		<Box
			maxW={'full'}
			border={'1px solid'}
		>
			<Box
				bg='blackAlpha.200'
				h={10}
			>
				<Text
					fontSize='2xs'
					textAlign='center'
					letterSpacing={1}
					py={3}
				>
					Limited time: 15% off your next purchase with code FW2022 at checkout.
					Conditions apply.
				</Text>
			</Box>
			<Flex
				minWidth='max-content'
				alignItems='center'
				gap={2}
			>
				<Flex gap={4}>
					<Link to='/men'>MENSWEAR</Link>
					<Link to='/women'>WOMENSWEAR</Link>
					<Link to='/everything-else'>EVERYTHING ELSE</Link>
				</Flex>
				<Spacer />
				<Box p='2'>
					<Heading size='md'>SSENSE</Heading>
				</Box>
				<Spacer />
				<Flex gap={4}>
					<Link to='/login'>Login</Link>
					<Link to='/wishlist'>Wishlist</Link>
					<Link to='/shopping-bag'>Shoppingbag(0)</Link>
				</Flex>
			</Flex>
		</Box>
	);
}

export default Navbar;
