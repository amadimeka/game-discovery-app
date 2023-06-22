import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { usePlatforms } from '../hook/usePlatforms';
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../hook/useGame';
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() =>
              onSelectPlatform(platform)
            }>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
