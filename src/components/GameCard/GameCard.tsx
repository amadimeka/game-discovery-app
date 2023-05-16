import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react';
import { DataResult } from '../hook/useGame';
import IconList from './IconList';
import CriticScore from './CriticScore';
import { CroppedImage } from '../../services/crop-image';

interface Props {
  game: DataResult;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card
      w="300px"
      borderRadius={10}
      overflow={'hidden'}>
      <Image
        src={CroppedImage(game.background_image)}
        alt="img"
      />
      <CardBody>
        <Heading fontSize={'2xl'}>
          {game.name}
        </Heading>
        <Flex
          justifyContent="space-between"
          alignItems="center">
          <IconList
            platforms={game.parent_platforms.map(
              (p) => p.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
