import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import { locale } from '../localization';
import MuruganPhoto from '../styles/images/gallery/5.jpg';
import ContactPhoto from '../styles/images/contact.jpg';

const Contact = ({language}) => {
    locale.setLanguage(language);
    return (
        <React.Fragment>
            <Banner />
            <h6 className="heading text-center mt-4">{locale.headermenu.contact}</h6>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <img src={MuruganPhoto} className="img" alt='Muruga' />
                    </div>
                    <div className="col-12 col-sm-8">
                        <div className="contact-box text-center mt-5">
                            <h5>{locale.name}</h5>
                            <h6>{locale.place}</h6>
                            <h6>{locale.contact.post}</h6>
                            <h6>{locale.contact.via}</h6>
                            <h6>{locale.contact.taluk}</h6>
                            <h6>{locale.contact.district}</h6>
                            <h6>{locale.contact.state}</h6>
                            <h6>{locale.contact.country}</h6>
                            <h6>{locale.pincode}</h6>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 mt-3">
                        <img src={ContactPhoto} className="img rounded" alt='ContactPhoto' />
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
export default connect(mapStateToProps, null) (Contact);