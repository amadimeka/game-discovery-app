import {
  Box,
  HStack,
  List,
  Image,
  Button,
  Spinner,
} from '@chakra-ui/react';
import {
  GenreProps,
  useGenre,
} from '../hook/useGenre';

interface Genre {
  onSelectGenre: (genre: GenreProps) => void;
}

const GenericList = ({
  onSelectGenre,
}: Genre) => {
  const { data, loading } = useGenre();
  return (
    <Box>
      <List>
        {loading && <Spinner />}
        {data.map((genre) => (
          <HStack paddingY={1} key={genre.id}>
            <Image
              boxSize="32px"
              borderRadius="4px"
              src={genre.image_background}
            />
            <Button
              variant="link"
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
