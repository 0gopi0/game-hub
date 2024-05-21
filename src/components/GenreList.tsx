import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import UseGenres from "./hooks/UseGenres";
import GetCropedImageUrl from "./GetCropedImageUrl";

const GenreList = () => {
  const { data } = UseGenres();
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
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
