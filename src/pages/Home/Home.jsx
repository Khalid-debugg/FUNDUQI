import React from "react";
import "../Home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Image, Box, UnorderedList, ListItem } from "@chakra-ui/react";
const home = () => {
  return (
    <Box className="w-[90%] mx-auto">
      <nav className="flex items-center justify-between w-[90%] md:px-14 pr-14  mx-auto z-10 text-white h-[5rem] fixed">
        <header>
          <Link to="/">
            <Image
              objectFit="cover"
              src="src\assets\logo\png\logo-white-no-background.png"
              minW="250px"
              h="100px"
            ></Image>
          </Link>
        </header>
        <UnorderedList className="hidden gap-11 items-center md:flex">
          <ListItem className="list-none hover:underline cursor-pointer font-semibold">
            Search
          </ListItem>
          <ListItem className="list-none hover:underline cursor-pointer font-semibold">
            About
          </ListItem>
          <ListItem className="list-none hover:underline cursor-pointer font-semibold text-center bg-[var(--dark-cyan)] px-[1rem] py-[0.5rem] rounded-xl">
            <Link to="/signup">Sign up</Link>
          </ListItem>
        </UnorderedList>
        <FontAwesomeIcon className="md:hidden" icon={faBars} size="lg" />
      </nav>
      <Box className="relative">
        <Image
          objectFit="cover"
          className="rounded-xl w-full h-[800px]"
          src="src\assets\logo\png\pool.jpg"
        ></Image>
        <Box className="md:flex flex-col max-w-[70rem] w-[75%] gap-5 absolute top-[14rem] headline-transform left-[5rem] p-[2rem] rounded-3xl bg text-white self-center text-5xl font-bold hidden ">
          <h1 className="">Your Stay,</h1>
          <h1 className="leading-[5rem]">
            Our Expertise: Reserve with Confidence!
          </h1>
        </Box>
      </Box>
    </Box>
  );
};

export default home;
