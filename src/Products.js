import React from 'react';
import gambar1 from './merah.jpg';
import gambar2 from './putih.jpg';
import gambar3 from './premium.jpg';

function Products() {
  return (
    <div id='Products' className="products-container">
      <h2>Produk Unggulan Kami</h2>
      <div className="product">
        <img src={gambar1} alt="Minuman 1" />
        <h3>Anggur Merah</h3>
        <p>Anggur merah adalah minuman alkohol yang terbuat dari proses fermentasi jus anggur merah. Dipilih dari berbagai varietas anggur, anggur merah menawarkan beragam rasa dan aroma, mulai dari buah-buahan seperti buah hitam dan berry hingga nuansa rempah-rempah dan kayu dari proses penuaan. Dengan kandungan alkohol yang berkisar antara 10% hingga 15%, anggur merah sering disajikan bersama dengan makanan, memperkaya pengalaman kuliner dengan harmoni rasa yang sempurna. Selain sebagai minuman yang dinikmati secara sosial, anggur merah juga dikenal memiliki manfaat kesehatan, termasuk perlindungan terhadap penyakit jantung dan pembuluh darah, serta kaya akan antioksidan untuk kesejahteraan tubuh secara keseluruhan.</p>
      </div>
      <div className="product">
        <img src={gambar2} alt="Minuman 2" />
        <h3>Anggur Putih</h3>
        <p>Anggur putih adalah salah satu jenis anggur yang memiliki buah berwarna kekuningan atau hijau kekuningan ketika matang. Buah anggur putih biasanya digunakan untuk membuat berbagai jenis minuman anggur, mulai dari yang segar hingga yang bersifat fermentasi seperti anggur putih kering, anggur putih manis, anggur putih sparkling, hingga anggur putih fortified. Karakteristik rasa anggur putih bervariasi tergantung pada varietasnya, tetapi umumnya bisa mencakup aroma dan rasa buah-buahan seperti apel, pear, citrus, atau tropis, serta kadang-kadang memiliki sentuhan herbal atau bunga.</p>
      </div>
      <div className="product">
        <img src={gambar3} alt="Minuman 3" />
        <h3>Anggur Premium</h3>
        <p>Anggur premium adalah pilihan istimewa bagi pecinta anggur yang menginginkan pengalaman yang tak terlupakan. Dibudidayakan dengan cermat di kebun anggur pilihan yang terkenal akan kondisi tanahnya yang istimewa dan iklim yang ideal, setiap tetes anggur premium menggambarkan cerita unik dari tempat asalnya. Rasakan keistimewaan anggur premium dengan karakteristik rasa yang kaya dan kompleks, menghadirkan lapisan-lapisan buah yang berlimpah, sentuhan halus tannin (untuk anggur merah), serta harmoni yang sempurna antara keasaman dan manis. Setiap tegukan adalah perjalanan sensorik yang membawa Anda ke alam tempat anggur tersebut tumbuh.</p>
        <h4>MASIH BANYAK MINUMAN KAMI YANG DAPAT DINIKMATI, MARI KE TOKO KAMI!</h4>
      </div>
    </div>
  );
}

export default Products;