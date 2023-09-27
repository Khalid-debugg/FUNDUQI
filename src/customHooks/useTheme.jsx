import { useColorModeValue } from "@chakra-ui/react";

const useTheme = () => {
  const theme = {
    backgroundImage: useColorModeValue(
      "var(--light-gradient)",
      "var(--dark-gradient)"
    ),
    headingColor: useColorModeValue("var(--dark-cyan)", "var(--lemon)"),
    sectionColor: useColorModeValue("white", "var(--dark-cyan)"),
    cardColor: useColorModeValue("rgb(217, 243, 255)", "rgb(0,62,91)"),
  };

  return theme;
};

export default useTheme;
