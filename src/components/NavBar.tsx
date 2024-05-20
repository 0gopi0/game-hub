import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/robo.svg";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} p={2} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
