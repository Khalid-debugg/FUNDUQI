import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useMotionValue, useDragControls } from "framer-motion";
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
  Flex,
  ButtonGroup,
} from "@chakra-ui/react";
import useTheme from "../customHooks/useTheme";

const Carousel = ({ slides }) => {
  const theme = useTheme();
  const carouselWidth = slides.length * 500;
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const dragControls = useDragControls();

  return (
    <motion.div
      className="cursor-grab parent"
      overflow="hidden"
      transition={{ type: "spring", stiffness: 120 }}
    >
      <Flex wrap="wrap" justify="space-between" paddingBottom="2rem">
        <Heading as="h3">Our Recommendations</Heading>
        <ButtonGroup>
          <Button
            onClick={() => {
              if (!isDragging) {
                x.set(Math.min(x.get() + 500, 0));
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} size="xl" />
          </Button>
          <Button
            onClick={() => {
              if (!isDragging) {
                x.set(Math.max(x.get() - 500, -carouselWidth));
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleRight} size="xl" />
          </Button>
        </ButtonGroup>
      </Flex>
      <motion.div
        className={`flex gap-10 ${!isDragging ? "transition-all" : ""} `}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        drag="x"
        dragControls={dragControls}
        dragConstraints={{
          right: 0,
          left: -(
            carouselWidth - document.querySelector(".parent")?.offsetWidth
          ),
        }}
        dragElastic={0.5}
        style={{ x }}
      >
        {slides.map((slide, index) => {
          return (
            <motion.div key={index}>
              <Card
                className="relative"
                h="35rem"
                w="25rem"
                backgroundColor={theme.cardColor}
              >
                <CardBody>
                  <Image
                    loading="lazy"
                    objectFit="cover"
                    src={`src/assets/images/${slide.image}`}
                    borderRadius="lg"
                    pointerEvents={"none"}
                  />
                  <Box className="absolute top-4 right-4 p-2 rounded-lg bg-orange-600 text-white">
                    {slide.offer}% off
                  </Box>
                  <Stack mt="6" spacing="3">
                    <Heading size="md" as="h4">
                      {slide.title}
                    </Heading>
                    <Text>{slide.description}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Book now
                    </Button>
                  </ButtonGroup>
                  <Text
                    fontSize="xl"
                    backgroundColor={"white"}
                    padding={"0.5rem"}
                    borderRadius={"0.5rem"}
                    color={"var(--blackish)"}
                  >
                    ${slide.price}
                  </Text>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
