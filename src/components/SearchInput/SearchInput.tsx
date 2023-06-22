import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
interface Props {
  onSearch: (searchValue: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Box width={'100%'}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current)
            onSearch(ref.current.value);
        }}>
        <InputGroup>
          <InputLeftElement
            children={<BsSearch />}
          />
          <Input
            ref={ref}
            placeholder="Search games..."
            variant={'outline'}
            borderRadius={'20px'}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
