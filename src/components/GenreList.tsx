import {
	HStack,
	List,
	ListItem,
	Image,
	Text,
	Skeleton,
	SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data, isLoading } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	if (isLoading) {
		return (
			<List>
				{skeletons.map((skeleton) => {
					return (
						<ListItem key={skeleton} paddingY="5px">
							<HStack>
								<Skeleton>
									<Image
										boxSize="32px"
										borderRadius={8}
									></Image>
								</Skeleton>
								<SkeletonText noOfLines={1} width="120px" />
							</HStack>
						</ListItem>
					);
				})}
			</List>
		);
	}

	return (
		<List>
			{data.map((genre) => {
				return (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							></Image>
							<Text fontSize={"lg"}>{genre.name}</Text>
						</HStack>
					</ListItem>
				);
			})}
		</List>
	);
};

export default GenreList;
