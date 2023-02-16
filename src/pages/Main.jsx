import React from 'react';
import About from '../pages/About/About';
import Beranda from '../pages/Home/Beranda';
import Karya from '../pages/Karya/karya';
import Kontak from '../pages/Kontak/Kontak'

function Main() {
  return (
    <>
      <Beranda />
      <About />
      <Karya />
      <Kontak/>
    </>
  );
}

export default Main;
