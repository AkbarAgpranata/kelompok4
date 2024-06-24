import React from 'react';
import gambar1 from './image/teluksepang.jpeg';
import gambar2 from './image/sumber.jpeg';
import gambar3 from './image/kandangmas.jpg';
import gambar4 from './image/sinarasih.jpg';
import gambar5 from './image/smp19.jpg';
import gambar6 from './image/punguk.jpg';



function rayon() {
  return (
    <div id='rayon'>
      <div >
        <h1 className='judulRayon'>RAYON YANG ADA DI KAMPUNG MELAYU :</h1>
      </div>
      <div className="rayon-container">
        <div className="product">
          <h3>TELUK SEPANG</h3>
          <img src={gambar1} alt="Teluk Sepang" />
          <p style={{ textAlign: 'justify' }}>Rayon ini sekarang berlokasi di lapangan Sanimas kelurahan Teluk Sepang. Rayon Teluk Sepang adalah rayon pertama yang didirikan oleh pendiri pertama di Kampung Melayu yaitu kang mas Al-Shokib warga PSHT yang berasal dari Cabang Bojonegoro yang mana pada tahun 2011 di Stockpile perusahaan batu bara di kelurahan Teluk Sepang dan pada tahun 2013 melahirkan 5 orang pendekar yaitu Mas Fikri, Widianto, Meriyanto, Budi, dan Zeleski dan sampai saat ini juga terus aktif dan akan melahirkan generasi selanjutnya.</p>
        </div>
        <div className="product">
          <h3>SUMBER JAYA</h3>
          <img src={gambar2} alt="Sumber Jaya" />
          <p style={{ textAlign: 'justify' }}>Salah satu rayon di Kampung Melayu adalah Sumber Jaya yang berlokasi di lapangan bola kelurahan Sumber Jaya. Sumber jaya sudah lama didirikan, namun sempat vakum lalu berdiri kembali pada akhir tahun 2019, yang kemudian melahirkan 4 pendekar dan 1 srikandi pada tahun 2021. Mereka adalah Mas Ferdiansyah Dwi P, Ratama, Yego, Imam Hengki T, dan Mbak Saripa. Lalu, juga telah melahirkan pendekar dan srikandi lainnya di tahun berikutnya (2022,2023) dan masih terus aktif sampai detik ini.</p>
        </div>
        <div className="product">
          <h3>KANDANG MAS</h3>
          <img src={gambar3} alt="Kandang Mas" />
          <p style={{ textAlign: 'justify' }}>Rayon Kandang Mas berlokasi di MI IKHWANUL DJHAHUARIAH kelurahan Kandang Mas. Rayon ini didirikan di awal tahun 2023 yang sekarang telah diikuti banyak siswa dan sekarang telah memiliki 1 calon warga yang akan disahkan pada tahun 2024 ini serta akan selalu berkembang kedepannya.</p>
        </div>
        <div className="product">
          <h3>SINAR ASIH</h3>
          <img src={gambar4} alt="Sinar Asih" />
          <p style={{ textAlign: 'justify' }}>Rayon Sinar Asih ini berlokasikan di Sinar Asih Padang Serai. Rayon inilah yang menjadi induk dari rayon dan sub rayon di padang serai. Rayon ini didirikan pada awal tahun 2023 yang sekarang telah berkembang pesat dimana yang ikut latihan di rayon ini sudah banyak terutama pada usia dini dan remaja.</p>
        </div>
        <div className="product">
          <h3>SMP 19 SUB RAYON PADANG SERAI</h3>
          <img src={gambar5} alt="SMP 19" />
          <p style={{ textAlign: 'justify' }}>Sub Rayon SMP 19 KOTA BENGKULU berlokasikan di SMP 19 KOTA BENGKULU didirikan pada pertengahan tahun 2023 yang kini telah memiliki beberapa siswa. Sub Rayon ini menginduk ke Sinar Asih yang mana adalah Rayon induk Padang Serai. Sub rayon ini terbuka untuk umum dimana selain murid SMP 19 KOTA BENGKULU juga dapat ikut latihan di sini.</p>
        </div>
        <div className="product">
          <h3>PUNGGUK SUB RAYON PADANG SERAI</h3>
          <img src={gambar6} alt="PUNGGUK" />
          <p style={{ textAlign: 'justify' }}>Sub Rayon PUNGGUK berlokasikan di Pungguk kelurahan Padang Serai. Rayon ini juga didirikan pada tahun 2023 yang juga menginduk ke Rayon Sinar Asih (Padang Serai) dan telah diikuti beberapa siswa juga.</p>
        </div>
      </div><br></br>
    </div>
  );
}

export default rayon;

