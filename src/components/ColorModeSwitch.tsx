import { Button, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button onClick={toggleColorMode} size="sm" minWidth={"80px"}>
			{colorMode === "light" ? "Dark" : "Light"} mode
		</Button>
	);
};

export default ColorModeSwitch;
