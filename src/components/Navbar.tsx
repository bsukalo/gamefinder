import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Text,
} from "@chakra-ui/react";

const Navbar = () => {
	return (
		<Breadcrumb separator={""}>
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
				<Text>Dark mode/Light mode</Text>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default Navbar;
