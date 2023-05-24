import {
  Grid,
  GridItem,
  Show,
} from '@chakra-ui/react';
import NavBar from './components/Nav/NavBar';
import GameGrid from './components/GameGrid/GameGrid';
import GenericList from './components/GenericList/GenericList';
import { useState } from 'react';
import { GenreProps } from './components/hook/useGenre';
const App = () => {
  const [selectGenre, setSelectGenre] =
    useState<GenreProps | null>(null);
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX="5px" area="nav">
          <GenericList
            onSelectGenre={(genre) =>
              setSelectGenre(genre)
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
