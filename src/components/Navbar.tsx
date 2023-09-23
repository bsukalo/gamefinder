import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Text,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
	return (
		<Breadcrumb
			separator={""}
			sx={{ ol: { justifyContent: "space-between", padding: "10px" } }}
		>
			<BreadcrumbItem>
				<BreadcrumbLink href="#">
					<Text as="b" letterSpacing={"1px"} fontSize={"18px"}>
						gamefinder
					</Text>
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<Text>Search... _______</Text>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<ColorModeSwitch></ColorModeSwitch>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default Navbar;
