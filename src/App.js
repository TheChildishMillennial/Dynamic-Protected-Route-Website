import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./lib/Theme";
import { router } from "./lib/Routes";
import { AuthContext } from "./lib/AuthContext";
import { RouterProvider } from "react-router-dom";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthContext>
        <RouterProvider router={router}/>
      </AuthContext>
    </ChakraProvider>
  );
}

export default App;
