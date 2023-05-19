import { Box } from '@chakra-ui/react'
import {useGenre} from '../hook/useGenre'

const GenericList = () => {
    const {genres}= useGenre();
  return (
<Box>
    <ul>
        {genres.map((genre)=>(<li>{genre.name}</li>))}
    </ul>
</Box>
  )
}

export default GenericList