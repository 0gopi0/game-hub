import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import UseGenres, { Genre } from "./hooks/UseGenres";
import GetCropedImageUrl from "./GetCropedImageUrl";
interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelect }: Props) => {
  const { data, isLoading, error } = UseGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize={8}
              borderRadius={8}
              src={GetCropedImageUrl(g.image_background)}
            />
            <Button
              fontWeight={g.id === selectedGenre?.id ? "bold" : ""}
              onClick={() => onSelect(g)}
              variant="link"
              fontSize="lg"
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
