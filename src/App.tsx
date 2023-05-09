import { Grid, GridItem, } from '@chakra-ui/react';
import NavBar from './components/Nav/NavBar';
import GameGrid from './components/GameGrid/GameGrid';
const App=()=> {

  return (
     <Grid
      templateAreas={`"header header"
      "nav main"`}
     >
        <GridItem px='2' py='2' area={'header'}>
<NavBar/>
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    <GameGrid />
  </GridItem>

     </Grid>
  );
}

export default App;
