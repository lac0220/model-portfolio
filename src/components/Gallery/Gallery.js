import './Gallery.scss';
import ModalImage from "react-modal-image";
import img1 from '../../img/1.webp';
import img2 from '../../img/2.webp';
import img3 from '../../img/3.webp';
import img4 from '../../img/4.webp';
import img5 from '../../img/5.webp';
import img6 from '../../img/6.webp';
import img7 from '../../img/7.webp';
import img8 from '../../img/8.webp';
import img10 from '../../img/10.webp';
import img11 from '../../img/11.webp';
import img12 from '../../img/12.webp';
import img13 from '../../img/13.webp';
import art1 from '../../img/art1.jpg';
import art2 from '../../img/art2.jpg';

export default function Gallery () {  
    return (
      <section className="gallery">
        <h1>Gallery</h1>
        <div className="gallery-images">
          <div className="gallery-images__box">
            <h2>Model</h2>
            <div className="gallery-images__box__img1">
              <ModalImage
                small={img1}
                large={img1}
                hideDownload="true"
              />
              <ModalImage
                small={img2}
                large={img2}
                hideDownload="true"
              />
                <ModalImage
                small={img4}
                large={img4}
                hideDownload="true"
              />
                <ModalImage
                small={img5}
                large={img5}
                hideDownload="true"
              />
                <ModalImage
                small={img6}
                large={img6}
                hideDownload="true"
              />
                <ModalImage
                small={img7}
                large={img7}
                hideDownload="true"
              />
                <ModalImage
                small={img8}
                large={img8}
                hideDownload="true"
              />
                <ModalImage
                small={img10}
                large={img10}
                hideDownload="true"
              />
                <ModalImage
                small={img11}
                large={img11}
                hideDownload="true"
              />
              <ModalImage 
                small={img3} 
                large={img3}
                hideDownload="true"
              />
                <ModalImage
                small={img12}
                large={img12}
                hideDownload="true"
              />
                <ModalImage
                small={img13}
                large={img13}
                hideDownload="true"
              />
            </div>  
          </div>  

          <div className="gallery-vertical-line"></div>

          <div className="gallery-images__box">
            <h2>Art</h2>
            <div className="gallery-images__box__img1">
              <ModalImage
                small={art1}
                large={art1}
                hideDownload="true"
              />
              <ModalImage
                small={art2}
                large={art2}
                hideDownload="true"
              />
                <ModalImage
                small={img4}
                large={img4}
                hideDownload="true"
              />
                <ModalImage
                small={img5}
                large={img5}
                hideDownload="true"
              />
                <ModalImage
                small={img6}
                large={img6}
                hideDownload="true"
              />
                <ModalImage
                small={img7}
                large={img7}
                hideDownload="true"
              />
                <ModalImage
                small={img8}
                large={img8}
                hideDownload="true"
              />
                <ModalImage
                small={img10}
                large={img10}
                hideDownload="true"
              />
                <ModalImage
                small={img11}
                large={img11}
                hideDownload="true"
              />
               <ModalImage 
                small={img3} 
                large={img3}
                hideDownload="true"
              />
                <ModalImage
                small={img12}
                large={img12}
                hideDownload="true"
              />
                <ModalImage
                small={img13}
                large={img13}
                hideDownload="true"
              />
            </div>  
          </div>    
        </div>  

        <div className="social-media">
          <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" rel="noopener noreferrer" alt="Instagram logo"><i className="fab fa-instagram"/></a>    {/* instagram */}
          <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" rel="noopener noreferrer" alt="Facebook logo"><i className="fab fa-facebook" /></a>    {/* facebook */}
          <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" rel="noopener noreferrer" alt="Linkedin logo"><i className="fab fa-linkedin" /></a>    {/* linkedin */}
        </div>    
    </section>
  );
  }