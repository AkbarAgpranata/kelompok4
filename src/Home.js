import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gambar1 from './image/satu.jpeg';
import gambar2 from './image/dua.jpeg';
import gambar3 from './image/tiga.jpeg';
import gambar4 from './image/empat.jpeg';
import gambar5 from './image/lima.jpeg';
import gambar6 from './image/enam.jpg';
import logoPSHT from './image/PSHT.png';
import logoKpMelayu from './image/favicon.png';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div id='Home' className="home-container">
      <div className="top-content background-home">
        <div className="title-container">
          <img src={logoPSHT} alt="Logo PSHT" className="logo-psht" />
          <h1 className="main-title">PERSAUDARAAN SETIA HATI TERATE<br />RANTING KAMPUNG MELAYU</h1>
          <img src={logoKpMelayu} alt="Logo KpMelayu" className="logo-kpmelayu" />
        </div>
        <div className="teks">
          <div className="teks-container">
            <h2 className="teks-title">Salam Persaudaraan!<br />PSHT JAYA!</h2>
            <p className="teks-content">
              Selamat datang di website Persaudaraaan Setia Hati Terate Ranting Kampung Melayu Cabang Kota Bengkulu.
              PSHT Ranting Kampung Melayu adalah sebuah organisasi yang berbentuk Persaudaraan yang berkedudukan di
              Kecamatan Kampung Melayu, Kota Bengkulu, Provinsi Bengkulu. Ranting Kampung Melayu menaungi beberapa
              Rayon yang ada di dalamnya. Selengkapnya dapat dilihat di website ini
            </p>
          </div>
        </div>
      </div>
      <div className="slider-section">
        <Slider {...settings}>
          <div>
            <img src={gambar1} alt="Gambar 1" className="slider-image" />
          </div>
          <div>
            <img src={gambar2} alt="Gambar 2" className="slider-image" />
          </div>
          <div>
            <img src={gambar3} alt="Gambar 3" className="slider-image" />
          </div>
          <div>
            <img src={gambar4} alt="Gambar 4" className="slider-image" />
          </div>
          <div>
            <img src={gambar5} alt="Gambar 5" className="slider-image" />
          </div>
          <div>
            <img src={gambar6} alt="Gambar 6" className="slider-image" />
          </div>
        </Slider>
        <h2>Kegiatan-kegiatan Kampung Melayu</h2>
        <p>
          Sudah banyak kegiatan-kegiatan yang telah dilakukan oleh PSHT Ranting Kampung Melayu semenjak didirikan.<br />
          Seperti Serasehan, Ujian Kenaikan Tingkat, Latihan Atlit, dan sebagainya.
        </p>
      </div>
    </div>
  );
}

export default Home;

