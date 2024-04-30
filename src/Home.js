import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import merah from './merah.jpg';
import putih from './putih.jpg';
import premium from './premium.jpg';

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
      <div className="hero-section">
        <Slider {...settings}>
          <div>
            <img src={merah} alt="Gambar 1" className="slider-image" />
          </div>
          <div>
            <img src={putih} alt="Gambar 2" className="slider-image" />
          </div>
          <div>
            <img src={premium} alt="Gambar 3" className="slider-image" />
          </div>
        </Slider>
        <h1>Selamat Datang di Rangkaian Minuman Kami</h1>
        <p>Ciptakan Kenangan Manis dengan Minuman Berkualitas Tinggi!</p>
      </div>

    </div>
  );
}

export default Home;
