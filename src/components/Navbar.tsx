import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamefinder.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
	return (
		<HStack justifyContent={"space-between"} padding={"10px"}>
			<Image src={logo} maxWidth={"180px"} />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;
