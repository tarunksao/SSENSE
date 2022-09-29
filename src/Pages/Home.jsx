import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import SpinPin from '../Images/SpinPin.jpg';
import InfiniteTimesInfinite from '../Images/InfiniteTimesInfinite.jpg';
import RidingOut from '../Images/RidingOut.jpg';
import SettingTable from '../Images/SettingTable.jpg';
import YoungWorld from '../Images/YoungWorld.jpg';
import AlexanderMcBag from '../Images/AlexanderMcBag.jpg';
import AlexanderMcQueen from '../Images/AlexanderMcQueen.jpg';
import Coperni from '../Images/Coperni.jpg';
import WooYoungMi from '../Images/WooYoungMi.jpg';
import BackToSchool from '../Images/BackToSchool.jpg';
import BrownNoiseReset from '../Images/BrownNoiseReset.jpg';
import DenimBlues from '../Images/DenimBlues.jpg';
import RiverLRamirez from '../Images/RiverLRamirez.jpg';
import SeptemberIssue from '../Images/SeptemberIssue.jpg';
import SimoneRocha from '../Images/SimoneRocha.jpg';
import SimoneRochaMen from '../Images/SimoneRochaMen.jpg';
import SkiiFall from '../Images/SkiiFall.jpg';

function Home() {
	return (
		<Container
			maxW={'8xl'}
			h='auto'
			pos='relative'
			top='70px'
			mb='200px'
			// border={'1px solid'}
		>
			<Flex textStyle='flex1'>
				<Box>
					<Image
						src={SpinPin}
						alt='spin-pin'
						w={'610px'}
					/>
					<Flex textStyle='flex1Texts'>
						<Text textStyle='blogCategory'>Culture</Text>
						<Text textStyle='blogHeading'>IS THE SPIN PIN GAY?</Text>
					</Flex>
					<Text textStyle='blogDescription'>
						Minor Meditations on Hair, Queerness, and Presentation
					</Text>
				</Box>
				<Box>
					<Image
						src={InfiniteTimesInfinite}
						alt='infinite-times'
						w={'610px'}
					/>
					<Flex textStyle='flex1Texts'>
						<Text textStyle='blogCategory'>Art</Text>
						<Text textStyle='blogHeading'>INFINITE TIMES INFINITE</Text>
					</Flex>
					<Text textStyle='blogDescription'>Artwork by Somnath Bhatt</Text>
				</Box>
			</Flex>

			{/* Blog Flex with 3 elements below */}

			<Flex textStyle='flex2'>
				<Box>
					<Image
						src={RidingOut}
						alt='riding-out'
						w='445px'
					/>
					<Flex textStyle='flex2Text'>
						<Box>
							<Text textStyle='recentText'>RECENT</Text>
						</Box>
						<Box>
							<Text textStyle='blogHeading'>
								RIDING OUT WITH LA BIKE LIFE AND CLARKS ORIGINALS FW22
							</Text>
							<Flex textStyle='blogCategory'>
								<Text>Fashion</Text>
								<Text>| Sept 21</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
				<Box>
					<Image
						src={YoungWorld}
						alt='young-world'
						w='445px'
					/>
					<Flex textStyle='flex2Text'>
						<Box>
							<Text textStyle='recentText'>RECENT</Text>
						</Box>
						<Box>
							<Text textStyle='blogHeading'>HEY YOUNG WORLD</Text>
							<Flex textStyle='blogCategory'>
								<Text>Fashion</Text>
								<Text>| Sept 19</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
				<Box>
					<Image
						src={SettingTable}
						alt='setting-table'
						w='445px'
					/>
					<Flex textStyle='flex2Text'>
						<Box>
							<Text textStyle='recentText'>RECENT</Text>
						</Box>
						<Box>
							<Text textStyle='blogHeading'>THE ART OF SETTING THE TABLE</Text>
							<Flex textStyle='blogCategory'>
								<Text>Culture</Text>
								<Text>| Sept 16</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Flex>

			{/* Element to be added */}

			<Flex textStyle='flex1'>
				<Box>
					<Image
						src={AlexanderMcQueen}
						alt='alexander-mcqueen'
						w={'610px'}
					/>
					<Flex textStyle='flex1Texts'>
						<Text textStyle='blogCategory'>Featured</Text>
						<Text textStyle='blogHeading'>ALEXANDER MCQUEEN</Text>
					</Flex>
					<Button
						textStyle='redirectButton'
						fontSize='xs'
						variant='outline'
						size='lg'
						borderRadius='10px'
						colorScheme='blackAlpha.50'
					>
						SHOP MENSWEAR
					</Button>
				</Box>
				<Box>
					<Image
						src={AlexanderMcBag}
						alt='alexander-mcbag'
						w={'610px'}
					/>
					<Flex textStyle='flex1Texts'>
						<Text textStyle='blogCategory'>Featured</Text>
						<Text textStyle='blogHeading'>ALEXANDER MCQUEEN</Text>
					</Flex>
					<Button
						textStyle='redirectButton'
						fontSize='xs'
						variant='outline'
						size='lg'
						borderRadius='10px'
						colorScheme='blackAlpha.50'
					>
						SHOP WOMENSWEAR
					</Button>
				</Box>
			</Flex>

			{/* HStack Element to be added */}

			<Flex textStyle='flex1'>
				<Box>
					<Image
						src={WooYoungMi}
						alt='woo-young-mi'
						w={'610px'}
					/>
					<Flex textStyle='flex1Texts'>
						<Text textStyle='blogCategory'>Featured</Text>
						<Text textStyle='blogHeading'>WOOYOUNGMI</Text>
					</Flex>
					<Button
						textStyle='redirectButton'
						fontSize='xs'
						variant='outline'
						size='lg'
						borderRadius='10px'
						colorScheme='blackAlpha.50'
					>
						SHOP MENSWEAR
					</Button>
				</Box>
				<Box>
					<Image
						src={Coperni}
						alt='coperni'
						w={'610px'}
					/>
					<Flex textStyle='flex1Texts'>
						<Text textStyle='blogCategory'>Featured</Text>
						<Text textStyle='blogHeading'>COPERNI</Text>
					</Flex>
					<Button
						textStyle='redirectButton'
						fontSize='xs'
						variant='outline'
						size='lg'
						borderRadius='10px'
						colorScheme='blackAlpha.50'
					>
						SHOP WOMENSWEAR
					</Button>
				</Box>
			</Flex>

			{/* Editorial Element to be added */}

			{/* Blog Flex with 3 elements below */}

			<Flex textStyle='flex2'>
				<Box>
					<Image
						src={DenimBlues}
						alt='denim-blues'
						w='445px'
					/>
					<Flex textStyle='flex2Text'>
						<Box>
							<Text textStyle='recentText'>RECENT</Text>
						</Box>
						<Box>
							<Text textStyle='blogHeading'>GET THE DENIM BLUES</Text>
							<Flex textStyle='blogCategory'>
								<Text>Market</Text>
								<Text>| Sept 8</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
				<Box>
					<Image
						src={BackToSchool}
						alt='back-to-school'
						w='445px'
					/>
					<Flex textStyle='flex2Text'>
						<Box>
							<Text textStyle='recentText'>RECENT</Text>
						</Box>
						<Box>
							<Text textStyle='blogHeading'>BACK-TO-SCHOOL BEAUTY</Text>
							<Flex textStyle='blogCategory'>
								<Text>Fashion</Text>
								<Text>| Sept 6</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
				<Box>
					<Image
						src={SeptemberIssue}
						alt='september-issue'
						w='445px'
					/>
					<Flex textStyle='flex2Text'>
						<Box>
							<Text textStyle='recentText'>RECENT</Text>
						</Box>
						<Box>
							<Text textStyle='blogHeading'>
								YOUR LIFE AS A SEPTEMBER ISSUE
							</Text>
							<Flex textStyle='blogCategory'>
								<Text>Culture</Text>
								<Text>| Sept 1</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Flex>

			{/* HStack Element to be added*/}

			<Flex textStyle='flex1'>
				<Box>
					<Image
						src={SimoneRochaMen}
						alt='simone-rocha-men'
						w={'610px'}
					/>
					<Flex textStyle='flex1Texts'>
						<Text textStyle='blogCategory'>Featured</Text>
						<Text textStyle='blogHeading'>SIMONE ROCHA</Text>
					</Flex>
					<Button
						textStyle='redirectButton'
						fontSize='xs'
						variant='outline'
						size='lg'
						borderRadius='10px'
						colorScheme='blackAlpha.50'
					>
						SHOP MENSWEAR
					</Button>
				</Box>
				<Box>
					<Image
						src={SimoneRocha}
						alt='simone-rocha'
						w={'610px'}
					/>
					<Flex textStyle='flex1Texts'>
						<Text textStyle='blogCategory'>Featured</Text>
						<Text textStyle='blogHeading'>SIMONE ROCHA</Text>
					</Flex>
					<Button
						textStyle='redirectButton'
						fontSize='xs'
						variant='outline'
						size='lg'
						borderRadius='10px'
						colorScheme='blackAlpha.50'
					>
						SHOP WOMENSWEAR
					</Button>
				</Box>
			</Flex>

			{/* Blog Flex with 3 elements below */}

			<Flex textStyle='flex2'>
				<Box>
					<Image
						src={RiverLRamirez}
						alt='river-l-ramirez'
						w='445px'
					/>
					<Flex textStyle='flex2Text'>
						<Box>
							<Text textStyle='recentText'>RECENT</Text>
						</Box>
						<Box>
							<Text textStyle='blogHeading'>
								RIVER L. RAMIREZ AND THE ART OF HORNINESS
							</Text>
							<Flex textStyle='blogCategory'>
								<Text>Culture</Text>
								<Text>| Aug 30</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
				<Box>
					<Image
						src={SkiiFall}
						alt='skii-fall'
						w='445px'
					/>
					<Flex textStyle='flex2Text'>
						<Box>
							<Text textStyle='recentText'>RECENT</Text>
						</Box>
						<Box>
							<Text textStyle='blogHeading'>THE SKIIFALL GENRE</Text>
							<Flex textStyle='blogCategory'>
								<Text>Music</Text>
								<Text>| Aug 26</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
				<Box>
					<Image
						src={BrownNoiseReset}
						alt='brown-noise-reset'
						w='445px'
					/>
					<Flex textStyle='flex2Text'>
						<Box>
							<Text textStyle='recentText'>RECENT</Text>
						</Box>
						<Box>
							<Text textStyle='blogHeading'>BROWN NOISE RESET</Text>
							<Flex textStyle='blogCategory'>
								<Text>Market</Text>
								<Text>| Aug 24</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Container>
	);
}

export default Home;
