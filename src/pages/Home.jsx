import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faXmark,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  Image,
  Box,
  UnorderedList,
  ListItem,
  Input,
  HStack,
  Flex,
  VStack,
  Button,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import FAQs from "../components/FAQs";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import Counter from "../components/Counter";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useTheme from "../customHooks/useTheme";
AOS.init({ once: true });

const Home = () => {
  const theme = useTheme();
  const [isBlur, setIsBlur] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    AOS.init();
  }, [colorMode]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsBlur(window.scrollY > 150 ? true : false);
    });
    return document.removeEventListener("scroll", () => {
      setIsBlur(window.scrollY > 150 ? true : false);
    });
  }, []);
  const handleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box backgroundImage={theme.backgroundImage}>
      {/* Desktop nav */}
      <nav
        className={`flex items-center justify-between w-full md:px-[7vw] px-[7vw] z-10 !text-${
          isBlur ? (colorMode === "dark" ? "white" : "black-300") : "white"
        } h-[5rem] fixed ${
          isBlur ? (colorMode === "dark" ? "bg-dark-blur" : "bg-blur") : ""
        } ${isBlur && "box-shadow"} `}
      >
        <header>
          <Link to="/">
            <Image
              loading="lazy"
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
            />
          </Link>
        </header>
        <UnorderedList
          display={{ base: "none", md: "flex" }}
          gap="2.75rem"
          alignItems="center"
        >
          <Button
            onClick={() => {
              toggleColorMode();
            }}
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
        } ${isMobileMenuOpen && "menu-transform "}`}
      >
        <HStack
          display="flex"
          justifyContent="space-between"
          paddingRight="10vw"
        >
          <Link to="/">
            <Image
              loading="lazy"
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
          loading="lazy"
          objectFit="cover"
          w="100%"
          h="1000px"
          src="src\assets\logo\png\pool.jpg"
        ></Image>
        <Box
          data-aos="fade-right"
          display={{ base: "none", sm: "flex" }}
          flexDirection="column"
          maxW="70rem"
          w="75%"
          gap="1.25rem"
          position="absolute"
          top="14rem"
          left="10vw"
          padding="2rem"
          borderRadius="1.5rem"
          color="white"
          alignSelf="center"
          fontSize="3rem"
          lineHeight="1"
          fontWeight="700"
          className="bg"
        >
          <Heading as="h1" size="2xl" lineHeight="5rem">
            Your Stay, <br /> Our Expertise: Reserve with Confidence!
          </Heading>
        </Box>
        <Box
          display="flex"
          gap="1rem"
          alignItems="center"
          paddingX="2rem"
          paddingY="1.5rem"
          maxW="90rem"
          w="75%"
          borderRadius="9999px;"
          position="absolute"
          bottom="-3.5rem"
          left="10vw"
          backgroundColor="#006975"
          overflow="hidden"
          borderWidth="5px"
          data-aos="fade-up"
        >
          <Link>
            <FontAwesomeIcon color="white" icon={faSearch} size="xl" />
          </Link>
          <Input
            placeholder="Search for a hotel"
            backgroundColor="white"
            border="none"
            size="lg"
            color={"black"}
          />
        </Box>
      </Box>
      {/* Back to top Icon */}
      {isBlur && (
        <Button
          position={"fixed"}
          borderRadius={"20rem"}
          padding={"0"}
          bottom={"10"}
          right={"10"}
          zIndex={"20"}
          onClick={handleScroll}
        >
          <FontAwesomeIcon icon={faArrowCircleUp} size="2xl" />
        </Button>
      )}
      {/* Content */}
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
          data-aos="fade-down"
          backgroundColor={theme.sectionColor}
          borderRadius="2.5rem"
          p="5rem"
        >
          <Heading
            as="h2"
            color={theme.headingColor}
            textAlign="center"
            marginBottom="5rem"
          >
            Delivering Trust, Beyond Expectations 🏠
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
          data-aos="fade-down"
          backgroundColor={theme.sectionColor}
          borderRadius="2.5rem"
          p="3rem"
        >
          <Heading
            as="h2"
            color={theme.headingColor}
            textAlign="center"
            marginBottom="3rem"
          >
            Hot Deals 🔥
          </Heading>
          <Carousel
            slides={[
              {
                title: "Coastal Luxury Getaway",
                image: "Room1.jpg",
                description:
                  " Step into a world of coastal elegance in our Deluxe Ocean-Inspired Suite. With a king-sized bed, spacious living area, and modern amenities, this suite offers a tranquil escape by the sea.",
                offer: 40,
                price: 200,
              },
              {
                title: "City-Center Comfort",
                image: "Room2.jpg",
                description:
                  "Experience the city's heartbeat from our Executive City-Center Retreat. Rest well in a plush queen-sized bed, and stay productive with a well-equipped workspace and high-speed Wi-Fi.",
                offer: 44,
                price: 500,
              },
              {
                title: "Garden Family Getaway",
                image: "Room3.jpg",
                description:
                  "Nestled amidst lush gardens, our Family-Friendly Garden Bungalow provides a spacious haven for families. Enjoy two bedrooms, a kitchenette, and a private patio for cherished moments together.",
                offer: 60,
                price: 350,
              },
              {
                title: "Romantic Retreat",
                image: "Room4.jpg",
                description:
                  "Create cherished memories in our Romantic Honeymoon Suite. Revel in the luxury of a king-sized bed, an in-room jacuzzi, and a fireplace, making it perfect for couples in love.",
                offer: 40,
                price: 350,
              },
              {
                title: "Spa & Wellness Escape",
                image: "Room5.jpg",
                description:
                  "Find rejuvenation in our Premium Spa & Wellness Oasis. Relax with a private sauna, whirlpool tub, and exclusive spa access , whirlpool tub , and exclusive spa access for a truly revitalizing stay.",
                offer: 35,
                price: 400,
              },
              {
                title: "Classic Elegance",
                image: "Room6.jpg",
                description:
                  " Experience classic charm with a touch of modern luxury in our Classic Elegance Double Room. Enjoy antique furnishings and contemporary amenities for a perfect blend of tradition and comfort.",
                offer: 25,
                price: 450,
              },
            ]}
          />
        </Box>
        <Box
          data-aos="fade-down"
          backgroundColor={theme.sectionColor}
          borderRadius="2.5rem"
          p="3rem"
        >
          <Heading
            as="h2"
            color={theme.headingColor}
            textAlign="center"
            marginBottom="3rem"
          >
            Testimonials
          </Heading>
          <Testimonials
            testimonials={[
              {
                value: "jeff",
                label: "Jeff Bezos",
                panel:
                  "I recently used Funduqi to book a hotel for my family vacation, and I couldn't be happier with the experience. The website was incredibly user-friendly, making it a breeze to search for hotels in our desired location and filter the results based on our preferences. We found the perfect hotel that suited our budget and needs. The booking process was seamless, and we received instant confirmation. What impressed me the most was the fantastic customer support. When we had a question about our reservation, their support team was quick to respond and resolve our issue. Thanks to Funduqi, our vacation was stress-free, and we had a wonderful time at the hotel. I highly recommend Funduqi to anyone looking for a hassle-free and reliable hotel booking platform!",
              },
              {
                value: "elon",
                label: "Elon Musk",
                panel:
                  "I can't say enough good things about Funduqi! I've been using this hotel booking website for both business and leisure travel, and it has consistently exceeded my expectations. The website's interface is clean and intuitive, making it easy to find the right accommodation for any trip. I appreciate the detailed hotel listings with high-quality photos and accurate descriptions, which help me make informed decisions. The real standout for me, though, is the competitive pricing. I've often found great deals on Funduqi that I couldn't find anywhere else. Plus, their loyalty program offers fantastic perks and discounts for frequent travelers like myself. Whether you're booking a quick weekend getaway or an extended business trip, Funduqi is my go-to platform for stress-free hotel reservations. It's a game-changer in the world of online hotel booking!",
              },
              {
                value: "eltokhy",
                label: "Ibrahim Eltokhy",
                panel: "Funduqi howa amali",
              },
            ]}
          />
        </Box>
        <Box
          data-aos="fade-down"
          backgroundColor={theme.sectionColor}
          borderRadius="2.5rem"
          paddingY="3rem"
          paddingX="5rem"
        >
          <Heading
            as="h2"
            color={theme.headingColor}
            textAlign="center"
            marginBottom="3rem"
          >
            FAQ (Frequently Asked Questions) ❔
          </Heading>
          <FAQs
            questions={[
              {
                question: "How do I make a reservation on your website?",
                answer: `To make a reservation, simply visit our website and enter your
        destination, check-in and check-out dates, and the number of guests.
        Click the "Search" button to view available hotels. Select the one
        that suits your needs and follow the on-screen instructions to
        complete the booking.`,
              },
              {
                question: "What is your cancellation policy?",
                answer: `Our cancellation policy varies depending on the hotel and room type
    you choose. You can find the specific cancellation details on the
    hotel's information page during the booking process. Typically, we
    offer both non-refundable and flexible booking options. Please review
    the terms carefully before confirming your reservation.`,
              },
              {
                question: "Can I modify my reservation after it's been made?",
                answer: `Yes, you can modify your reservation, including changing dates or room
    types, as long as the selected hotel and room allow for modifications.
    Simply log in to your account, go to "My Reservations," and follow the
    instructions to make the necessary changes. Please note that
    modification options may be subject to availability and hotel
    policies.`,
              },
              {
                question: " What types of payment do you accept for bookings?",
                answer: `We accept a variety of payment methods, including major credit and
    debit cards (Visa, MasterCard, American Express, etc.), PayPal, and
    sometimes other online payment platforms. You can select your
    preferred payment method during the booking process.`,
              },
              {
                question:
                  "Do you have any special offers or promotions available?",
                answer: `Yes, we often have special offers and promotions available for
    selected hotels and dates. These may include discounts, free nights,
    or bundled packages with added amenities. To find current promotions,
    check the "Deals" or "Special Offers" section on our website or look
    for any available discounts during the booking process.`,
              },
              {
                question: "What amenities are included in the room rate?",
                answer: `The amenities included in your room rate can vary depending on the
    hotel and room type you choose. Commonly included amenities are free
    Wi-Fi, complimentary breakfast, parking (if available), and access to
    fitness centers or swimming pools. You can find detailed information
    about the inclusions on the hotel's information page when making your
    reservation.`,
              },
            ]}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;
