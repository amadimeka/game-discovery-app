import React from 'react';
import { Platform } from '../hook/useGame';
import { HStack, Icon } from '@chakra-ui/react';

import {
  FaApple,
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
interface Props {
  platforms: Platform[];
}
const IconList: React.FC<Props> = ({
  platforms,
}) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    ios: MdPhoneIphone,
    xbox: FaXbox,
    playstation: FaPlaystation,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
        <Icon
          as={icons[platform.slug]}
          color="grey.500"
        />
      ))}
    </HStack>
  );
};

export default IconList;
