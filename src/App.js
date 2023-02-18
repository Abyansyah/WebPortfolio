import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Utama from './Components/Utama';
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as Mysvg } from './Asset/arrow.svg';
import './Css/App.css';

function App() {
  return (
    <>
      <Navbar />
      <Utama />
      <ScrollToTop smooth color='#7a49fe' component={<Mysvg/>}/>
      <Footer />
    </>
  );
}

export default App;
