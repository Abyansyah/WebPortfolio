import {Routes, Route} from 'react-router-dom'
import Beranda from '../pages/Main';
import About from './About';
import Karya from './karya';
import Kontak from './Kontak';

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
