import './gallery.scss';
import ModalImage from "react-modal-image";
import img_modeling1 from '../../img/Modeling/1.webp';
import img_modeling2 from '../../img/Modeling/2.webp';
import img_modeling3 from '../../img/Modeling/3.webp';
import img_modeling4 from '../../img/Modeling/4.webp';
import img_modeling5 from '../../img/Modeling/5.webp';
import img_modeling6 from '../../img/Modeling/6.webp';
import img_modeling7 from '../../img/Modeling/7.webp';
import img_modeling8 from '../../img/Modeling/8.webp';
import img_modeling9 from '../../img/Modeling/9.webp';
import img_modeling10 from '../../img/Modeling/10.webp';
import img_modeling11 from '../../img/Modeling/11.webp';
import img_modeling12 from '../../img/Modeling/12.webp';
import img_modeling14 from '../../img/Modeling/14.webp';
import img_modeling15 from '../../img/Modeling/15.webp';
import img_art1 from '../../img/Art/art2.webp';
import img_art2 from '../../img/Art/art1.webp';

export default function Gallery () {  
    return (
        <div className="gallery">
            <h1>Gallery</h1>
            <ul>
                <li>
                    <h2>Modeling</h2>
                    <div className="gallery-container">
                        <ModalImage
                            small={img_modeling15}
                            large={img_modeling15}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling2}
                            large={img_modeling2}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling10}
                            large={img_modeling10}
                            hideDownload="true"
                        />
                        <ModalImage 
                            small={img_modeling3} 
                            large={img_modeling3}
                            hideDownload="true"
                        />
                         <ModalImage
                            small={img_modeling14}
                            large={img_modeling14}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling12}
                            large={img_modeling12}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling11}
                            large={img_modeling11}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling4}
                            large={img_modeling4}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling9}
                            large={img_modeling9}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling5}
                            large={img_modeling5}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling8}
                            large={img_modeling8}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling6}
                            large={img_modeling6}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_modeling1}
                            large={img_modeling1}
                            hideDownload="true"
                        />
                         <ModalImage
                            small={img_modeling7}
                            large={img_modeling7}
                            hideDownload="true"
                        />
                    </div>  
                </li>  
                <li className="vertical-line"></li>
                <li>
                    <h2>Art</h2>
                    <div className="gallery-container">
                        <ModalImage
                            small={img_art1}
                            large={img_art1}
                            hideDownload="true"
                        />
                        <ModalImage
                            small={img_art2}
                            large={img_art2}
                            hideDownload="true"
                        />
                    </div>  
                </li>    
            </ul>  
        </div>
    );
}