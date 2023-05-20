import { Box } from '@chakra-ui/react';
import { useGenre } from '../hook/useGenre';

const GenericList = () => {
  const { data } = useGenre();
  return (
    <Box>
      <ul>
        {data.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </Box>
  );
};

export default GenericList;
