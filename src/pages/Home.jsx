import { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
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
  Flex,
  Spacer,
  VStack,
  Button,
  useColorMode,
  Heading,
  Text,
} from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import Counter from "../components/Counter";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useTheme from "../customHooks/useTheme";

const Home = () => {
  const theme = useTheme();
  const headline = useRef(null);
  const search = useRef(null);
  const [isBlur, setIsBlur] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
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
    <Box backgroundImage={theme.backgroundImage}>
      {/* Desktop nav */}
      <nav
        className={`flex items-center justify-between w-full md:px-[7vw] px-[7vw] z-10 !text-${
          isBlur ? (colorMode === "dark" ? "white" : "black-300") : "white"
        } h-[5rem] fixed ${
          isBlur ? (colorMode === "dark" ? "bg-dark-blur" : "bg-blur") : ""
        } ${isBlur ? "box-shadow" : ""} `}
      >
        <header>
          <Link to="/">
            <Image
              objectFit="cover"
              src={`src\\assets\\logo\\png\\${
                isBlur
                  ? colorMode === "dark"
                    ? "logo-no-background"
                    : "logo-black2-no-background"
                  : "logo-white-no-background"
              }.png`}
              minW="250px"
              h="100px"
            ></Image>
          </Link>
        </header>
        <UnorderedList
          display={{ base: "none", md: "flex" }}
          gap="2.75rem"
          alignItems="center"
        >
          <Button
            onClick={toggleColorMode}
            backgroundColor="gray.100"
            color="gray.800"
            _hover={{ backgroundColor: "gray.400", color: "gray.900" }}
          >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
          <ListItem
            listStyleType="none"
            cursor="pointer"
            _hover={{ textDecorationLine: "underline" }}
            fontWeight="600"
          >
            Search
          </ListItem>
          <ListItem
            listStyleType="none"
            cursor="pointer"
            _hover={{ textDecorationLine: "underline" }}
            fontWeight="600"
          >
            About
          </ListItem>
          <ListItem
            listStyleType="none"
            cursor="pointer"
            _hover={{ textDecorationLine: "underline" }}
            fontWeight="600"
            color="white"
            textAlign="center"
            backgroundColor="var(--dark-cyan)"
            paddingX="1rem"
            paddingY="0.5rem"
            borderRadius="0.75rem"
          >
            <Link to="/signup">Sign up</Link>
          </ListItem>
        </UnorderedList>
        <Button
          onClick={handleMenu}
          display={{ base: "block", md: "none" }}
          backgroundColor="gray.100"
          color="gray.800"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </Button>
      </nav>
      {/* Mobile Nav */}
      <nav
        className={`fixed top-0 left-[-50rem] h-screen w-full md:hidden z-10 flex flex-col transition-all ease-in-out duration-500 ${
          colorMode === "dark" ? "bg-[var(--blackish)]" : "bg-white"
        } ${isMobileMenuOpen ? "menu-transform " : ""}`}
      >
        <HStack
          display="flex"
          justifyContent="space-between"
          paddingRight="10vw"
        >
          <Link to="/">
            <Image
              objectFit="cover"
              src={`src/assets/logo/png/${
                colorMode === "light"
                  ? "logo-black2-no-background.png"
                  : "logo-no-background.png"
              }`}
              minW="250px"
              h="100px"
            ></Image>
          </Link>
          <Button onClick={handleMenu}>
            <FontAwesomeIcon
              display={{ base: "block", md: "hidden" }}
              z="30"
              icon={faXmark}
              size="lg"
            />
          </Button>
        </HStack>
        <UnorderedList
          display="flex"
          flexDirection="column"
          height="100%"
          paddingX="3rem"
          paddingTop="5rem"
          gap="5rem"
          alignItems="center"
        >
          <ListItem
            listStyleType="none"
            cursor="pointer"
            _hover={{ textDecorationLine: "underline" }}
            fontWeight="600"
          >
            Search
          </ListItem>
          <ListItem
            listStyleType="none"
            cursor="pointer"
            _hover={{ textDecorationLine: "underline" }}
            fontWeight="600"
          >
            About
          </ListItem>
          <Button onClick={toggleColorMode}>
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
          <ListItem
            listStyleType="none"
            cursor="pointer"
            _hover={{ textDecorationLine: "underline" }}
            w="80%"
            fontWeight="600"
            color="white"
            textAlign="center"
            backgroundColor="var(--dark-cyan)"
            paddingX="1rem"
            paddingY="0.5rem"
            borderRadius="0.75rem"
          >
            <Link to="/signup">Sign up</Link>
          </ListItem>
        </UnorderedList>
      </nav>
      {/* Headline and search bar */}
      <Box position="relative">
        <Image
          objectFit="cover"
          w="100%"
          h="900px"
          src="src\assets\logo\png\pool.jpg"
        ></Image>
        <Box
          ref={headline}
          display={{ base: "none", sm: "flex" }}
          flexDirection="column"
          maxW="70rem"
          w="75%"
          gap="1.25rem"
          position="absolute"
          top="14rem"
          left="-10vw"
          padding="2rem"
          borderRadius="1.5rem"
          color="white"
          alignSelf="center"
          fontSize="3rem"
          lineHeight="1"
          fontWeight="700"
          transition="all"
          transitionTimingFunction="ease-in-out"
          transitionDuration="500ms"
          className="bg"
        >
          <Heading as="h1" size="2xl" lineHeight="5rem">
            Your Stay, <br /> Our Expertise: Reserve with Confidence!
          </Heading>
        </Box>
        <Box
          ref={search}
          display="flex"
          gap="1rem"
          alignItems="center"
          paddingX="2rem"
          paddingY="1.5rem"
          maxW="90rem"
          w="75%"
          borderRadius="9999px;"
          position="absolute"
          bottom="-7rem"
          left="10vw"
          backgroundColor="#006975"
          overflow="hidden"
          borderWidth="5px"
          className="transition-all ease-in-out duration-500"
        >
          <Link>
            <FontAwesomeIcon color="white" icon={faSearch} size="xl" />
          </Link>
          <Input
            placeholder="Search for a hotel"
            backgroundColor="white"
            border="none"
            size="lg"
          />
        </Box>
      </Box>
      <VStack
        marginTop="7rem"
        w="90%"
        spacing={16}
        maxW="100rem"
        marginX="auto"
        alignItems="unset"
        overflow="hidden"
      >
        <Box
          backgroundColor={theme.sectionColor}
          borderRadius="2.5rem"
          p="3rem"
        >
          <Heading
            as="h2"
            color={theme.headingColor}
            textAlign="center"
            marginBottom="5rem"
          >
            Delivering Trust, Beyond Expectations
          </Heading>
          <Flex
            alignItems="center"
            justify="space-around"
            wrap="wrap"
            gap="2rem"
          >
            <Flex gap="5rem" justify="center" wrap="wrap">
              <Counter title={"Customers"} count={10000}></Counter>
              <Counter title={"Hotels"} count={1000}></Counter>
              <Counter title={"Rooms"} count={300000}></Counter>
            </Flex>
          </Flex>
        </Box>
        <Box
          backgroundColor={theme.sectionColor}
          borderRadius="2.5rem"
          p="3rem"
        >
          <Heading
            as="h2"
            color={theme.headingColor}
            textAlign="center"
            marginBottom="5rem"
          >
            Hot Deals 🔥
          </Heading>
          <Carousel />
        </Box>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
        <section>wtf</section>
      </VStack>
    </Box>
  );
};

export default Home;
