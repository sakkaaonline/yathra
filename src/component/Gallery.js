import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import { locale } from '../localization';
import ImageGallery from 'react-image-gallery';

import Img1 from '../styles/images/gallery/1.jpg';
import Img2 from '../styles/images/gallery/2.jpg';
import Img3 from '../styles/images/gallery/3.jpg';
import Img4 from '../styles/images/gallery/4.jpg';
import Img5 from '../styles/images/gallery/5.jpg';
import Img6 from '../styles/images/gallery/6.jpg';
import Img7 from '../styles/images/gallery/7.jpg';
import Img8 from '../styles/images/gallery/8.jpg';
import Img9 from '../styles/images/gallery/9.jpg';
import Img10 from '../styles/images/gallery/10.jpg';

const Gallery = ({language}) => {
    locale.setLanguage(language);
    const images = [
        {
          original: Img1,
          thumbnail: Img1,
        },
        {
          original: Img2,
          thumbnail: Img2,
        },
        {
          original: Img3,
          thumbnail: Img3,
        },
        {
          original: Img4,
          thumbnail: Img4,
        },
        {
          original: Img5,
          thumbnail: Img5,
        },
        {
         original: Img6,
         thumbnail: Img6,
        },
        {
          original: Img7,
          thumbnail: Img7,
        },
        {
          original: Img8,
          thumbnail: Img8,
        },
        {
          original: Img9,
          thumbnail: Img9,
        },
        {
         original: Img10,
         thumbnail: Img10,
        },        
    ];
    return (
        <React.Fragment>
            <Banner />
            <h6 className="heading mt-4">{locale.headermenu.gallery}</h6>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <ImageGallery items={images} slideInterval={6000} infinite={true} showFullscreenButton={false} useBrowserFullscreen={false} autoPlay={true} showBullets={true} />
                    </div>
                </div>
            </div>
            
            <h5 className="endtxt mt-5">{locale.banner.txt3}</h5>
        </React.Fragment>
    );
};
const mapStateToProps = (state) => {
    return {
        language: state.language
    };
}
export default connect(mapStateToProps, null) (Gallery);