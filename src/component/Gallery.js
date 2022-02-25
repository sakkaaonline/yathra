import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import { locale } from '../localization';
import ImageGallery from 'react-image-gallery';

const Gallery = ({language}) => {
    locale.setLanguage(language);
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      const url = `${process.env.PUBLIC_URL}/json/gallery.json`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error));
    }, []);
  
    React.useEffect(() => {
      if (data.length !== 0) {
        setIsLoading(false);
      }
    }, [data]);
    const currentDomain = `${process.env.PUBLIC_URL}/images/`;
    const sliderImages = (imgArray = []) => {
      return imgArray.map((img) => {
        return {
          original: `${currentDomain}${img}`,
          thumbnail: `${currentDomain}${img}`,
        }
      })
    }

    return (
        <React.Fragment>
            <Banner />
            <h6 className="heading mt-4">{locale.headermenu.gallery}</h6>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                  {isLoading ? (
                    <div className="col-12 col-sm-12">
                      <div class="alert alert-success text-center" role="alert">
                        {locale.events.loadingtxt}
                      </div>
                    </div>
                  ) : (
                    data.map((gallery) => (
                      <div className="col-12 col-sm-12">
                          <ImageGallery items={sliderImages(gallery.images)} slideInterval={6000} infinite={true} showFullscreenButton={false} useBrowserFullscreen={false} autoPlay={true} showBullets={true} />
                      </div>
                    ))
                  )}
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