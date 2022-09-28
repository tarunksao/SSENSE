import { Route, Routes } from 'react-router-dom';
import EveryThingElse from '../Pages/EveryThingElse';
import Home from '../Pages/Home';
import LoginSignup from '../Pages/LoginSignup';
import MensWear from '../Pages/MensWear';
import ShoppingBag from '../Pages/ShoppingBag';
import WishList from '../Pages/WishList';
import WomensWear from '../Pages/WomensWear';

function AllRoutes() {
	return (
		<Routes>
			<Route
				path=""
				element={<Home />}
			></Route>
			<Route
				path="/men"
				element={<MensWear />}
			></Route>
			<Route
				path="/women"
				element={<WomensWear />}
			></Route>
			<Route
				path="/everything-else"
				element={<EveryThingElse />}
			></Route>
			<Route
				path="/login"
				element={<LoginSignup />}
			></Route>
			<Route
				path="/wishlist"
				element={<WishList />}
			></Route>
			<Route
				path="/shopping-bag"
				element={<ShoppingBag />}
			></Route>
		</Routes>
	);
}

export default AllRoutes;
