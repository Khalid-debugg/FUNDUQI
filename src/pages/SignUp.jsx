import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Image,
  VStack,
  HStack,
  Button,
  FormControl,
  Heading,
  Input,
} from "@chakra-ui/react";
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      ` - Password must contain at least one uppercase letter.
        - one lowercase letter.
        - one digit.
        - one special character.
        - and be at least 8 characters long.
       `
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
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

  return (
    <Box
      className="w-full h-screen flex"
      color="white"
      css={{
        color: "var(--blackish)",
      }}
    >
      <Box className="flex flex-col justify-start w-full md:w-1/2 ">
        <Box className="flex justify-center md:block px-[5rem]">
          <Image
            objectFit="contain"
            src="src\assets\logo\png\logo-black.png"
            boxSize="250px"
          ></Image>
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
            Create an account
          </Heading>
          <Box className="border-b-2 w-1/2 max-w-[15rem] my-8"></Box>
          <Box className="!w-full">
            <form onSubmit={formik.handleSubmit} noValidate>
              <VStack spacing={5}>
                <HStack className="w-[80%] max-w-[30rem]">
                  <FormControl
                    isInvalid={
                      formik.errors.firstName && formik.touched.firstName
                    }
                  >
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 10"
                      {...formik.getFieldProps("firstName")}
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.errors.lastName && formik.touched.lastName
                    }
                  >
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 10"
                      {...formik.getFieldProps("lastName")}
                    />
                  </FormControl>
                </HStack>
                <FormControl
                  className="!w-[80%] max-w-[30rem]"
                  isInvalid={formik.errors.email && formik.touched.email}
                >
                  <Input
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
                <FormControl
                  className="!w-[80%] max-w-[30rem]"
                  isInvalid={
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                  }
                >
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    {...formik.getFieldProps("confirmPassword")}
                  />
                </FormControl>
                <Button
                  className="!w-[80%] max-w-[30rem] !bg-[var(--cyan)] hover:!bg-[var(--dark-cyan)] !text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  width="full"
                  isDisabled={currentErrors.length > 0}
                >
                  Create an account
                </Button>
              </VStack>
            </form>
          </Box>
          <Box className="mt-5">
            Do you have an Account?
            {/* <li>
              <Link to="#">Log in</Link>
            </li> */}
          </Box>
          <VStack className="mt-5">
            {currentErrors.length > 0 && (
              <div>
                {formik.errors[currentErrors[0]]
                  .replace("firstName", "First name")
                  .replace("lastName", "Last name")
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