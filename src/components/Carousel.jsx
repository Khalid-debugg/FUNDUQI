import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  CardFooter,
  Box,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slides = [
  {
    title: "Slide 1",
    image: "slide1.jpg",
    offer: 40,
  },
  {
    title: "Slide 2",
    image: "slide2.jpg",
    offer: 44,
  },
  {
    title: "Slide 3",
    image: "slide3.jpg",
    offer: 60,
  },
  {
    title: "Slide 4",
    image: "slide1.jpg",
    offer: 40,
  },
  {
    title: "Slide 5",
    image: "slide2.jpg",
    offer: 35,
  },
  {
    title: "Slide 6",
    image: "slide3.jpg",
    offer: 25,
  },
  // Add more slides as needed
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => {
        return (
          <Card key={index} maxW="sm" className="relative">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                borderRadius="lg"
              />
              <Box className="absolute top-4 right-4 p-2 rounded-lg bg-orange-600 text-white">
                {slide.offer}% off
              </Box>
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Book now
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </Slider>
  );
};

export default Carousel;
