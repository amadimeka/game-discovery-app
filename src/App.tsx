import {
  Grid,
  GridItem,
  Show,
} from '@chakra-ui/react';
import NavBar from './components/Nav/NavBar';
import GameGrid from './components/GameGrid/GameGrid';
import GenericList from './components/GenericList/GenericList';
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        md: `"header header"
        "nav main"`,
      }}>
      <GridItem px="2" py="2" area={'header'}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem
          pl="2"
          bg="pink.300"
          area={'nav'}>
          <GenericList />
        </GridItem>
      </Show>
      <GridItem
        pl="2"
        bg="green.300"
        area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
