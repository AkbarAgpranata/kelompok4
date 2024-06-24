import React from 'react';
import instagramIcon from './icons/instagram.png';
import tiktokIcon from './icons/tiktok.png';
import whatsappIcon from './icons/whatsapp.png';
import gmailIcon from './icons/gmail.png';
import facebookIcon from './icons/facebook.png';

function Contact() {
  return (
    <div id='Contact' className="social-links">
        <h2>Media Sosial Kampung Melayu :</h2>
        <p>
          <a href="https://www.instagram.com/psht.kpmelayu" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="icon" />
            @psht.kpmelayu
          </a>
        </p>
        <p>
          <a href="https://www.tiktok.com/@psht.kampungmelayu?_t=8nNq0wuPuue&_r=1" target="_blank" rel="noopener noreferrer">
            <img src={tiktokIcon} alt="Tiktok" className="icon" />
            @psht.kpmelayu
          </a>
        </p>
        <p>
          <a href="https://wa.me/+6289633867291" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="Whatsapp" className="icon" />
            0896-3386-7291
          </a>
        </p>
        <p>
        <a href="mailto:pshtkampungmelayu@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} alt="Instagram" className="icon" />
            pshtkampungmelayu@gmail.com
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/people/PSHT-Ranting-Kampung-Melayu/100090073148036/?paipv=0&eav=AfaEu4_Cij-OOiI13XviDHer0g5ERHQ-goR63Pj5cJ1Wx2S-VoQUCGBSTg78iQPQoNc&_rdr" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Whatsapp" className="icon" />
            PSHT Ranting Kampung Melayu
          </a>
        </p>
    </div>
  );
}

export default Contact;
