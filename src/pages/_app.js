import { Footer, Navbar } from "../layouts";
import "../assets/scss/globals.scss"

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
