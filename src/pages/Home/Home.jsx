import React, { useEffect, useRef, useState } from "react";
import "../Home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  Image,
  Box,
  UnorderedList,
  ListItem,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react";

const home = () => {
  const headline = useRef(null);
  const search = useRef(null);
  const [isBlur, setIsBlur] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isMobileMenuOpen);
    setTimeout(() => {
      headline.current.classList.add("headline-transform");
      search.current.classList.add("search-transform");
    }, 100);
    document.addEventListener("scroll", () => {
      setIsBlur(window.scrollY > 150 ? true : false);
    });
    return document.removeEventListener("scroll", () => {
      setIsBlur(window.scrollY > 150 ? true : false);
    });
  }, []);

  const handleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box backgroundImage="var(--gradient)">
      {/* Desktop nav */}
      <nav
        className={`flex items-center justify-between w-full md:px-[7vw] pr-[12vw] z-10 text-${
          isBlur ? "black-300" : "white"
        } h-[5rem] fixed ${isBlur ? "bg-blur" : ""} ${
          isBlur ? "box-shadow" : ""
        } `}
      >
        <header>
          <Link to="/">
            <Image
              objectFit="cover"
              src={`src\\assets\\logo\\png\\${
                isBlur
                  ? "logo-black2-no-background"
                  : "logo-white-no-background"
              }.png`}
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
          <ListItem className="list-none hover:underline cursor-pointer text-white font-semibold text-center bg-[var(--dark-cyan)] px-[1rem] py-[0.5rem] rounded-xl">
            <Link to="/signup">Sign up</Link>
          </ListItem>
        </UnorderedList>
        <Button onClick={handleMenu} className="md:!hidden">
          <FontAwesomeIcon className="" icon={faBars} size="lg" />
        </Button>
      </nav>
      {/* Mobile Nav */}
      <nav
        className={`fixed top-0 left-[-50rem] h-screen w-full md:hidden bg-white z-10 flex flex-col transition-all ease-in-out duration-500 ${
          isMobileMenuOpen ? "menu-transform" : ""
        }`}
      >
        <HStack className="flex justify-between pr-[10vw]">
          <Link to="/">
            <Image
              objectFit="cover"
              src="src/assets/logo/png/logo-black2-no-background.png"
              minW="250px"
              h="100px"
            ></Image>
          </Link>
          <Button onClick={handleMenu}>
            <FontAwesomeIcon
              className="md:hidden z-30"
              icon={faXmark}
              size="lg"
            />
          </Button>
        </HStack>
        <UnorderedList className="flex flex-col gap-11 h-full !m-0 px-[3rem]">
          <ListItem className="list-none hover:underline cursor-pointer font-semibold">
            Search
          </ListItem>
          <ListItem className="list-none hover:underline cursor-pointer font-semibold">
            About
          </ListItem>
          <ListItem className="list-none hover:underline cursor-pointer text-white font-semibold text-center w-[90%] bg-[var(--dark-cyan)] py-[0.5rem] rounded-xl">
            <Link to="/signup">Sign up</Link>
          </ListItem>
        </UnorderedList>
      </nav>
      <Box className="relative w-[90%] mx-auto">
        <Image
          objectFit="cover"
          className="rounded-xl w-full h-[800px]"
          src="src\assets\logo\png\pool.jpg"
        ></Image>
        <Box
          ref={headline}
          className="md:flex flex-col max-w-[70rem] w-[75%] gap-5 absolute top-[14rem] left-[-10rem] p-[2rem] rounded-3xl bg text-white self-center text-5xl font-bold hidden transition-all ease-in-out duration-500"
        >
          <h1 className="">Your Stay,</h1>
          <h1 className="leading-[5rem]">
            Our Expertise: Reserve with Confidence!
          </h1>
        </Box>
        <Box
          ref={search}
          className="flex items-center rounded-full py-6 pr-8 w-[75%] absolute bottom-[-7rem] left-[10vw] bg-[var(--dark-cyan)] overflow-hidden transition-transform ease-in-out duration-500"
        >
          <Link>
            <FontAwesomeIcon
              className="px-8"
              color="white"
              icon={faSearch}
              size="lg"
            />
          </Link>
          <Input
            placeholder="Search for a hotel"
            className="!bg-white !border-0"
            size="lg"
          />
        </Box>
      </Box>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
      <div>wtf</div>
    </Box>
  );
};

export default home;
