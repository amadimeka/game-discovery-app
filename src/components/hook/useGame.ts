import { GameQuery } from '../../App';
import { useData } from './useData';
export interface Platform {
  id: string;
  name: string;
  slug: string;
}
export interface DataResult {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

export const useGame = (gameQuery: GameQuery) =>
  useData<DataResult>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
       parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchValue,
      },
    },
    [gameQuery]
  );
