import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "../Component/Navabar";
import Footer from "../Component/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  );
}
