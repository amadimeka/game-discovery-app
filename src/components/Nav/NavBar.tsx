import { Button, HStack, Image, Switch, Text, useColorMode } from '@chakra-ui/react'
import viteIcon from '../../assets/react.svg'

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
 <HStack justifyContent={"space-between"}>
<Image src={viteIcon} alt="logo"/>
<HStack>
<Text>Light Mode</Text>
    <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
    <Text>Dark Mode</Text>
</HStack>
        
 </HStack>
  )
}

export default NavBar