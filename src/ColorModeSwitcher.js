import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
    variant="ghost"
    color="current"
    pos={'absolute'}
    top={16}
    right={4}
    onClick={toggleColorMode}
    icon={<SwitchIcon />}
    // zIndex={"overlay"}
    bgColor={'blackAlpha.300'}
      {...props}
    />
  );
};

export default ColorModeSwitcher;