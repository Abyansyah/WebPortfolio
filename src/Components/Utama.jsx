import {Routes, Route} from 'react-router-dom'
import Beranda from '../pages/Main';
import About from '../pages/About/About';
import Karya from '../pages/Karya/karya';
import Kontak from '../pages/Kontak/Kontak';

function Utama() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/about" element={<About />} />
      <Route path="/karya" element={<Karya />} />
      <Route path="/kontak" element={<Kontak />} />
    </Routes>
  );
}

export default Utama;
