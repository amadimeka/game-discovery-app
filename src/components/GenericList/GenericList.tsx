import {
  Box,
  HStack,
  List,
  Image,
  Button,
  Spinner,
  Heading,
} from '@chakra-ui/react';
import {
  GenreProps,
  useGenre,
} from '../hook/useGenre';

interface Genre {
  onSelectGenre: (genre: GenreProps) => void;
  selectGenre: GenreProps | null;
}

const GenericList = ({
  onSelectGenre,
  selectGenre,
}: Genre) => {
  const { data, loading } = useGenre();
  return (
    <Box>
      <Heading fontSize={'2xl'} marginY={3}>
        Genres
      </Heading>
      <List>
        {loading && <Spinner />}
        {data.map((genre) => (
          <HStack paddingY={1} key={genre.id}>
            <Image
              objectFit={'cover'}
              boxSize="32px"
              borderRadius="4px"
              src={genre.image_background}
            />
            <Button
              whiteSpace={'normal'}
              textAlign={'left'}
              variant="link"
              fontWeight={
                genre.id === selectGenre?.id
                  ? 'bold'
                  : 'normal'
              }
              onClick={() =>
                onSelectGenre(genre)
              }>
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List>
    </Box>
  );
};

export default GenericList;
