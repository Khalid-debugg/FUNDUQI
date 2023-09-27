import { HStack, Text, Flex, Button, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "../styles/Testimonials.css";
const Testimonials = ({ testimonials }) => {
  const [value, setValue] = useState("elon");

  useEffect(() => {
    const element = document.querySelector(".fade-in-text");
    element?.classList.toggle("fade-in-text");
  }, [value]);
  return (
    <Flex direction={"column"} gap={"5rem"}>
      <HStack justify={"center"} spacing={"1rem"}>
        <FontAwesomeIcon icon={faQuoteLeft} size="2xl" />
        <FontAwesomeIcon icon={faQuoteRight} size="2xl" />
      </HStack>

      {testimonials.map((testi, index) => (
        <Text
          className="fade-text"
          paddingX={"2rem"}
          key={index}
          textAlign={"center"}
          fontSize={"xl"}
          h={"11.5rem"}
          overflow={"auto"}
          hidden={testi.value !== value}
        >
          {testi.panel}
        </Text>
      ))}
      <Flex
        wrap={"wrap"}
        gap={"1rem"}
        justify={"space-around"}
        alignItems={"center"}
      >
        {testimonials.map((testi, index) => {
          return (
            <Button
              flexGrow={"1"}
              h={"100%"}
              key={index}
              filter={testi.value !== value && "grayscale(100%)"}
              _hover={{ filter: "grayscale(0%)", transform: "scale(1.03)" }}
              transition={"all ease-in-out 0.3s"}
              onClick={() => setValue(testi.value)}
              display={"flex"}
              gap={"1rem"}
            >
              <Image
                loading="lazy"
                src={`src/assets/images/${testi.value}.jpg`}
                w="100px"
                minW={"100px"}
                h={"100px"}
                objectFit={"cover"}
                objectPosition={"top"}
                borderRadius={"5rem"}
              />
              <Text>{testi.label}</Text>
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Testimonials;
