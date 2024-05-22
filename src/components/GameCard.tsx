import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "./hooks/UseGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GetCropedImageUrl from "./GetCropedImageUrl";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={
          GetCropedImageUrl(game.background_image) ||
          "https://cdn-image.hipwee.com/wp-content/uploads/2016/06/hipwee-belajar-bilang-maaf-1-1-750x422.jpg"
        }
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
