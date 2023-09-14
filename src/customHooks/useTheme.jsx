import React from "react";
import { useColorModeValue } from "@chakra-ui/react";

const useTheme = () => {
  const theme = {
    backgroundImage: useColorModeValue(
      "var(--light-gradient)",
      "var(--dark-gradient)"
    ),
    headingColor: useColorModeValue("var(--dark-cyan)", "var(--lemon)"),
    sectionColor: useColorModeValue("white", "var(--dark-cyan)"),
  };

  return theme;
};

export default useTheme;
