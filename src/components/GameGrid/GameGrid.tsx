import { SimpleGrid } from '@chakra-ui/react';
import { useGame } from '../hook/useGame';
import GameCard from '../GameCard/GameCard';
import GameGridSkeleton from './GameGridSkeleton';

const GameGrid = () => {
  const { data, error, loading } = useGame();
  const skeleton: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}>
      {error && <p>{error}</p>}
      {loading &&
        skeleton.map((item: any) => (
          <GameGridSkeleton key={item} />
        ))}
      {data?.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
