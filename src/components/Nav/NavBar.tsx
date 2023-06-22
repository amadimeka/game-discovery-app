import {
  HStack,
  Image,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import viteIcon from '../../assets/react.svg';
import SearchInput from '../SearchInput/SearchInput';
interface Props {
  onSearch: (searchValue: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode, toggleColorMode } =
    useColorMode();
  return (
    <HStack>
      <Image src={viteIcon} alt="logo" />
      <SearchInput onSearch={onSearch} />
      <HStack whiteSpace={'nowrap'}>
        <Text>Light Mode</Text>
        <Switch
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />
        <Text>Dark Mode</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
