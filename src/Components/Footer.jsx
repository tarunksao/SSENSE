import { Container, Flex, Text, VStack } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/icons';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
	return (
		<Container
			maxW={'6xl'}
			fontSize='xs'
			my={10}
			// pos='relative'
			// bottom='0'
		>
			<VStack gap={4}>
				<Flex gap={7}>
					<Text>COUNTRY/REGION: INDIA</Text>
					<Text>NEWSLETTER SIGNUP</Text>
					<Link>CUSTOMER CARE</Link>
					<Link>LOCATION</Link>
					<Link>EDITORIAL ARCHIVE</Link>
					<Link>CAREERS</Link>
					<Link>AFFILIATES</Link>
					<Link>SITEMAP</Link>
					<Flex gap={2}>
						<Icon as={FaFacebook} />
						<Icon as={FaTwitter} />
						<Icon as={FaInstagram} />
						<Icon as={FaYoutube} />
					</Flex>
				</Flex>
				<Flex
					fontSize={'2xs'}
					color='gray'
					gap={10}
				>
					<Text>© 2022 ssense.com</Text>
					<Link>Terms & Conditions</Link>
					<Link>Privacy Policy</Link>
					<Link>Cookies</Link>
					<Link>Accessibility</Link>
				</Flex>
			</VStack>
		</Container>
	);
}

export default Footer;
