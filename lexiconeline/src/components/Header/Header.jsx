import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<>
			<nav>
				<NavLink to={"/"}>Home</NavLink>
				<NavLink to={"/about"}>About</NavLink>
			</nav>
		</>
	);
};
