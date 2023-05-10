import React,{useContext} from "react";
import { Flex, Box, Text, Center, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";
import Logo from "../assets/cc.png"

export const Nav = () => {

  const { isAuth,  handleLogout } = useContext(AuthContext)
  return (
    <>
      <Box px={4} bg={"black"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <NavLink to="/">
            <Box w={20} h={16}> <Image h={16} src={Logo} /></Box>
            </NavLink>
          </Box>

          <Box display={["none", "block", "block"]}>
            <Flex gap={20}>

            {isAuth.auth === true ? <><Text  as='b' fontSize={"xl"} color='white'>{isAuth.name}</Text><Button color="white" background="red" onClick={handleLogout}>Logout</Button></> :
                        <><NavLink to="/login"><Text color="white">Login</Text></NavLink>
                            <NavLink to="/signUp"><Text color="white">Signup</Text></NavLink></>}
            </Flex>
          </Box>

          <Box display={["block", "none", "none"]} zIndex={2}>
            <Menu zIndex={2}>
              <MenuButton as={Button}>
                <GiHamburgerMenu color={"black"} />
              </MenuButton>
              <MenuList>

              {isAuth.auth === true ? <><Text marginLeft={71}  as='b' fontSize={"xl"} color='black'>{isAuth.name}</Text>
              <br></br>
              <Button color="white" background="red" marginLeft={59} onClick={handleLogout}>Logout</Button></> :
                        <><MenuItem>
                        {" "}
                        <NavLink to="/signUp"><Text color="black">Signup</Text></NavLink>
                      </MenuItem>
                      <MenuItem>
                  {" "}
                  <NavLink to="/login"><Text color="black">Login</Text></NavLink>
                </MenuItem>
                        </>}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </>
  );
};