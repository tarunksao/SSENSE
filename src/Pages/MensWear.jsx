import {
	Box,
	Container,
	Heading,
	Stack,
	Image,
	SimpleGrid,
	Text,
	HStack,
	Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const getDesigner = () => {
	return axios.get('https://mock-data-ssense.onrender.com/menswearDesigner');
};

const getMensWear = () => {
	return axios.get('https://mock-data-ssense.onrender.com/menswearProduct');
};

function MensWear() {
	const [designers, setDesigners] = useState([]);
	const [products, setProducts] = useState([]);
	// const [totalProduct, setTotalProduct] = useState([]);

	useEffect(() => {
		getDesigner().then((res) => setDesigners(res.data));
		getMensWear().then((res) => {
			setProducts(res.data);
			// setTotalProduct(res.headers['x-total-count']);
		});
	}, []);

	return (
		<Container
			maxW={'8xl'}
			h='auto'
			pos='relative'
			top='70px'
			mb='200px'
		>
			<Stack
				direction='row'
				mt={10}
				py={4}
				gap={14}
			>
				<Box>
					<Box mb={4}>
						<Heading fontSize={'sm'}>ALL CATEGORIES</Heading>
						<Text fontSize='xs'>ACCESSORIES</Text>
						<Text fontSize='xs'>BAGS</Text>
						<Text fontSize='xs'>CLOTHING</Text>
						<Text fontSize='xs'>SHOES</Text>
					</Box>
					<Box
						// border='1px solid'
						w={40}
					>
						<Heading fontSize={'sm'}>ALL DESIGNERS</Heading>
						{designers.map((el) => (
							<Text
								fontSize='xs'
								key={el.id}
								_hover={{ textDecoration: 'underline' }}
							>
								{el.name}
							</Text>
						))}
					</Box>
				</Box>
				<Box
					w='5xl'
					// border='1px solid'
				>
					<SimpleGrid
						columns={4}
						gap={8}
						// border='1px solid'
					>
						{products.map((el) => (
							<Box
								key={el.productID}
								// border='1px solid'
								px={4}
							>
								<Image
									src={el.image}
									alt={el.productID}
									w='200px'
									h='350px'
									margin='auto'
								/>
								<Text fontSize='xs'>{el.brand.name}</Text>
								<Text fontSize='xs'>{el.name}</Text>
								<HStack justifyContent='space-between'>
									<Text fontSize='xs'>${el.offers.price}</Text>
									<Button
										size='xs'
										variant='outline'
										colorScheme='black'
									>
										Add to Cart
									</Button>
								</HStack>
							</Box>
						))}
					</SimpleGrid>
				</Box>
				<Box>
					<Box mb={4}>
						<Heading fontSize={'sm'}>SORT</Heading>
						<Text fontSize='xs'>Latest arrivals</Text>
						<Text fontSize='xs'>Trending</Text>
						<Text fontSize='xs'>Price: Low to high</Text>
						<Text fontSize='xs'>Price: High to low</Text>
					</Box>
					<Box>
						<Heading fontSize={'sm'}>COLORS</Heading>
						<Text fontSize='xs'>Black</Text>
						<Text fontSize='xs'>Blue</Text>
						<Text fontSize='xs'>Brown</Text>
						<Text fontSize='xs'>Burgundy</Text>
						<Text fontSize='xs'>Gray</Text>
						<Text fontSize='xs'>Green</Text>
						<Text fontSize='xs'>Navy</Text>
						<Text fontSize='xs'>Orange</Text>
						<Text fontSize='xs'>Pink</Text>
						<Text fontSize='xs'>Purple</Text>
						<Text fontSize='xs'>Red</Text>
						<Text fontSize='xs'>Tan</Text>
						<Text fontSize='xs'>White</Text>
						<Text fontSize='xs'>Yellow</Text>
					</Box>
				</Box>
			</Stack>
		</Container>
	);
}

export default MensWear;
