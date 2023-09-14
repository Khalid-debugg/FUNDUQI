import { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = ({ title, count }) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
      }}
    >
      <Box>
        <Flex
          direction="column"
          alignItems="center"
          className="font-bold text-3xl"
        >
          <Text>
            {counterOn && (
              <CountUp start={0} end={count} duration={3} delay={0} />
            )}
            +
          </Text>
          <Text>{title}</Text>
        </Flex>
      </Box>
    </ScrollTrigger>
  );
};

export default Counter;
