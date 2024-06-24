import React from 'react';
import gambar1 from './image/sejarah.jpeg'

function About() {
  return (
    <div id='About' className="about-container">
      <h2>Sejarah Kampung Melayu</h2>
      <img src={gambar1} alt="SEJARAH" className="sejarah"/>
      <p>
      Foto di atas adalah foto pendiri PSHT Ranting Kampung Melayu dan siswa pertama di Ranting Kampung Melayu. Cikal bakal berdirinya Persaudaraan Setia Hati Terate di Kampung Melayu pada tahun 2011 dimana saat itu latihan pertama diadakan di Stockpile batu bara Kelurahan Teluk Sepang, Kecamatan Kampung Melayu. Yang didirikan oleh mas Al Shokib, yang berasal dari Bojonegoro dan telah melahirkan beberapa pendekar yaitu, mas Fikri,Zeleski,Meriyanto, Budi,Widianto dan hingga sekarang telah berkembang menjadi beberapa rayon serta melahirkan pendekar-pendekar dan srikandi PSHT yang lainnya.
    </p>
    </div>
  );
}

export default About;