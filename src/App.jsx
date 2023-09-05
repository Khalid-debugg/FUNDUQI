import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <>
      <ChakraProvider>
        <SignUp />
        {/* <Router>
          <Switch>
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router> */}
      </ChakraProvider>
    </>
  );
}

export default App;
