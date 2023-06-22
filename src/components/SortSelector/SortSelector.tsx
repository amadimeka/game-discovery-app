import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
interface Props {
  isSelectOrder: (sortOrder: string) => void;
  sortedOrder: string;
}
const SortSelector = ({
  isSelectOrder,
  sortedOrder,
}: Props) => {
  const [sortOrder] = useState([
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Released' },
    { value: 'name', label: 'Name' },
    {
      value: '-released',
      label: 'Released Date',
    },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ]);

  const currentSortOrder = sortOrder.find(
    (order) => order.value === sortedOrder
  );
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}>
        Order by:
        {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() =>
              isSelectOrder(order.value)
            }
            value={order.value}
            key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
