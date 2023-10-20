import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import lightLogo from "../assets/logo-light.webp";
import darkLogo from "../assets/logo-dark.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
	const theme = useColorModeValue("light", "dark");

	return (
		<HStack justifyContent={"space-between"} padding={"10px"}>
			{theme === "light" ? (
				<Image src={lightLogo} maxWidth={"180px"} />
			) : (
				<Image src={darkLogo} maxWidth={"180px"} />
			)}

			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;
