import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Image,
	Text,
} from "@chakra-ui/react";
import logo from "../assets/gamefinder.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
	return (
		<Breadcrumb
			separator={""}
			sx={{ ol: { justifyContent: "space-between", padding: "10px" } }}
		>
			<BreadcrumbItem>
				<BreadcrumbLink href="#">
					<Image src={logo} maxWidth={"180px"} />
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
