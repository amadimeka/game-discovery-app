import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { usePlatforms } from '../hook/usePlatforms';
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Box mb={4}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
