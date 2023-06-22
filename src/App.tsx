import {
  Grid,
  GridItem,
  HStack,
  Show,
} from '@chakra-ui/react';
import NavBar from './components/Nav/NavBar';
import GameGrid from './components/GameGrid/GameGrid';
import GenericList from './components/GenericList/GenericList';
import { useState } from 'react';
import { GenreProps } from './components/hook/useGenre';
import PlatformSelector from './components/PlatformSelector/PlatformSelector';
import { Platform } from './components/hook/useGame';
import SortSelector from './components/SortSelector/SortSelector';
import HeadingComp from './components/HeadingComp';
export interface GameQuery {
  genre: GenreProps | null;
  platform: Platform | null;
  sortOrder: string;
  searchValue: string;
}
const App = () => {
  const [gameQuery, setGameQuery] =
    useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header"
        "nav main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}>
      <GridItem px="2" py="2" area={'header'}>
        <NavBar
          onSearch={(searchValue) =>
            setGameQuery({
              ...gameQuery,
              searchValue,
            })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX="5px" area="nav">
          <GenericList
            onSelectGenre={(genre) =>
              setGameQuery({
                ...gameQuery,
                genre,
              })
            }
            selectGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HeadingComp gameQuery={gameQuery} />
        <HStack spacing={5} mb={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({
                ...gameQuery,
                platform,
              })
            }
          />
          <SortSelector
            sortedOrder={gameQuery.sortOrder}
            isSelectOrder={(sortOrder) =>
              setGameQuery({
                ...gameQuery,
                sortOrder,
              })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
