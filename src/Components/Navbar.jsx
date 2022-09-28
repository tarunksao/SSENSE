import {
	Box,
	Container,
	Flex,
	HStack,
	Image,
	Input,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Spacer,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { set } from 'lodash';
import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import clickReducer from './clickReducer';

function Navbar() {
	const { isOpen, onToggle, onClose } = useDisclosure();
	const [selected, setSelected] = useState();
	const [click, clickAction] = useReducer(clickReducer, {
		men: true,
		women: false,
		else: false,
	});

	const modifySearch = (val) => {
		setSelected(val);
	};

	return (
		<Box maxW={'full'}>
			<Box
				bg='blackAlpha.200'
				h={'45px'}
			>
				<Flex
					justifyContent='center'
					fontSize='xs'
					textAlign='center'
					py={3}
					gap={1}
				>
					<Text>
						Limited time: 15% off your next purchase with code FW2022 at
						checkout.
					</Text>
					<Text _hover={{ textDecoration: 'underline' }}>
						Conditions apply.
					</Text>
				</Flex>
			</Box>
			<Flex
				minWidth='max-content'
				alignItems='center'
				gap={0}
				py={5}
				px={12}
			>
				<Container>
					<Flex
						gap={7}
						justifyContent='start'
						fontSize='xs'
					>
						<Link to='/men'>MENSWEAR</Link>
						<Link to='/women'>WOMENSWEAR</Link>
						<Popover
							isOpen={isOpen}
							onClose={onClose}
						>
							<PopoverTrigger>
								<Link to='/everything-else'>EVERYTHING ELSE</Link>
							</PopoverTrigger>
							<PopoverContent>
								<PopoverBody
									py={5}
									px={6}
								>
									<HStack gap={2}>
										<Text
											_hover={{ textDecoration: 'underline' }}
											onClick={() => modifySearch('MENSWEAR')}
										>
											MENSWEAR
										</Text>
										<Text
											_hover={{ textDecoration: 'underline' }}
											onClick={() => modifySearch('WOMENSWEAR')}
										>
											WOMENSWEAR
										</Text>
										<Text
											_hover={{ textDecoration: 'underline' }}
											onClick={() => modifySearch('EVERYTHING ELSE')}
										>
											EVERYTHING ELSE
										</Text>
									</HStack>
									<HStack>
										<Input
											fontSize='xs'
											placeholder={`SEARCH ${selected}`}
										/>
										<Text onClick={onClose}>Close</Text>
									</HStack>
								</PopoverBody>
							</PopoverContent>
						</Popover>
						<Text onClick={onToggle}>SEARCH</Text>
					</Flex>
				</Container>
				<Spacer />
				<Container>
					<Flex justifyContent='center'>
						<Link to='/'>
							<Image
								w={'100px'}
								src='https://www.hostedpci.com/wp-content/uploads/2020/12/ssense-logo-300x56.png'
								alt='ssense-logo'
							/>
						</Link>
					</Flex>
				</Container>
				<Spacer />
				<Container>
					<Flex
						gap={5}
						justifyContent='end'
						fontSize='xs'
					>
						<Text>ENGLISH</Text>
						<Link to='/login'>LOGIN</Link>
						<Link to='/wishlist'>WISHLIST</Link>
						<Link to='/shopping-bag'>SHOPPINGBAG(0)</Link>
					</Flex>
				</Container>
			</Flex>
		</Box>
	);
}

export default Navbar;
