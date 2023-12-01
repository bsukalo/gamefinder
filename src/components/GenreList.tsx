import {
	HStack,
	List,
	ListItem,
	Image,
	Skeleton,
	SkeletonText,
	Button,
	Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => {
					return (
						<ListItem key={genre.id} paddingY="5px">
							<HStack>
								<Image
									boxSize="32px"
									borderRadius={8}
									objectFit={"cover"}
									src={getCroppedImageUrl(
										genre.image_background
									)}
								/>
								<Button
									onClick={() => onSelectGenre(genre)}
									fontSize={"lg"}
									fontWeight={
										genre.id === selectedGenre?.id
											? "bold"
											: "normal"
									}
									variant="link"
									whiteSpace="normal"
									textAlign="left"
								>
									{genre.name}
								</Button>
							</HStack>
						</ListItem>
					);
				})}
			</List>
		</>
	);
};

export default GenreList;
