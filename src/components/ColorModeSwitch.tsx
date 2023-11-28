import { Button, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			onClick={toggleColorMode}
			size={"40px"}
			minWidth={"40px"}
			minHeight={"40px"}
			borderRadius={10}
			fontSize={"1.3em"}
		>
			{colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
		</Button>
	);
};

export default ColorModeSwitch;
