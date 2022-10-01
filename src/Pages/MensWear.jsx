import {
	Box,
	Container,
	Heading,
	HStack,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const getDesigner = () => {
	return axios.get('http://localhost:4000/menswearDesigner');
};

const getMensWear = () => {
	return axios.get('http://localhost:4000/menswearProduct');
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
			<HStack
				columns={'3'}
				mt={10}
				py={4}
			>
				<VStack>
					<Box>
						<Heading fontSize={'sm'}>ALL CATEGORIES</Heading>
						<Text fontSize='xs'>ACCESSORIES</Text>
						<Text fontSize='xs'>BAGS</Text>
						<Text fontSize='xs'>CLOTHING</Text>
						<Text fontSize='xs'>SHOES</Text>
					</Box>
					<Box>
						<Heading fontSize={'sm'}>ALL DESIGNERS</Heading>
						{designers.map((el) => (
							<Text
								fontSize='xs'
								key={el.id}
							>
								{el.name}
							</Text>
						))}
					</Box>
				</VStack>
				<VStack>
					<SimpleGrid
						columns={4}
						gap={4}
					>
						{products.map((el) => (
							<Box key={el.productID}>
								<Image
									src={el.image}
									alt={el.productID}
									w='200px'
									h='300px'
								/>
								<Text>{el.brand.name}</Text>
								<Text>{el.name}</Text>
								<Text>${el.offers.price}</Text>
							</Box>
						))}
					</SimpleGrid>
				</VStack>
				<VStack>
					<Box>
						<Heading fontSize={'sm'}>SORT</Heading>
						<Text fontSize='xs'>Latest arrivals</Text>
						<Text fontSize='xs'>Trending</Text>
						<Text fontSize='xs'>Price: Low to high</Text>
						<Text fontSize='xs'>Price: High to low</Text>
					</Box>
					<Box>
						<Heading fontSize={'sm'}>COLORS</Heading>
					</Box>
				</VStack>
			</HStack>
		</Container>
	);
}

export default MensWear;
