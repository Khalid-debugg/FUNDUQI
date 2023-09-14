import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Image,
  VStack,
  Button,
  FormControl,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useEffect } from "react";
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      ` - Password must contain at least one uppercase letter.
        - one lowercase letter.
        - one digit.
        - one special character.
        - and be at least 8 characters long.
       `
    ),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values, actions) => {
      actions.resetForm();
      alert(JSON.stringify(values, null, 2));
    },
  });
  const currentErrors = Object.keys(formik.errors).filter((key) => {
    return formik.errors[key] && formik.touched[key];
  });

  useEffect(() => {
    document.documentElement.style.colorScheme = "light";
  }, []);
  return (
    <Box
      colorScheme="light"
      className="w-full h-screen flex"
      backgroundColor="white"
      color="white"
      css={{
        color: "var(--blackish)",
      }}
    >
      <Box className="flex flex-col w-full md:w-1/2 ">
        <Box className="flex justify-center md:block px-[5rem] my-[6rem]">
          <Link to="/">
            <Image
              objectFit="cover"
              src="src\assets\logo\png\logo-black.png"
              w="250px"
            ></Image>
          </Link>
        </Box>
        <VStack>
          <Heading
            as="h1"
            css={{
              color: "var(--blackish)",
              fontSize: "1.75rem !important",
              fontWeight: "800",
              fontFamily: "Roboto",
              textAlign: "center",
            }}
          >
            Log In
          </Heading>
          <Box className="border-b-2 w-1/2 max-w-[15rem] my-8"></Box>
          <Box className="!w-full">
            <form onSubmit={formik.handleSubmit} noValidate>
              <VStack spacing={5}>
                <FormControl
                  className="!w-[80%] max-w-[30rem]"
                  isInvalid={formik.errors.email && formik.touched.email}
                >
                  <Input
                    bg="white"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 10"
                    {...formik.getFieldProps("email")}
                  />
                </FormControl>
                <FormControl
                  className="!w-[80%] max-w-[30rem]"
                  isInvalid={formik.errors.password && formik.touched.password}
                >
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Your password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    {...formik.getFieldProps("password")}
                  />
                </FormControl>
                <Button
                  className="!w-[80%] max-w-[30rem] !bg-[var(--cyan)] hover:!bg-[var(--dark-cyan)] !text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  width="full"
                  isDisabled={currentErrors.length > 0}
                >
                  Sign In
                </Button>
              </VStack>
            </form>
          </Box>
          <Box className="mt-5 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[var(--dark-cyan)] underline">
              Sign up
            </Link>
          </Box>
          <VStack className="mt-5">
            {currentErrors.length > 0 && (
              <div>
                {formik.errors[currentErrors[0]]
                  .split(".")
                  .map((error, index) => {
                    return (
                      <div className="text-red-500 font-bold align" key={index}>
                        {error}
                      </div>
                    );
                  })}
              </div>
            )}
          </VStack>
        </VStack>
      </Box>
      <Box className="md:flex flex-col justify-center items-center w-1/2 hidden">
        <Image
          src="src\assets\Hotel registration.jpg"
          className="w-full h-full"
          objectFit="cover"
        ></Image>
      </Box>
    </Box>
  );
};

export default SignUp;
