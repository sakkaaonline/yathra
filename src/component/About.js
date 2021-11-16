import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import { locale } from '../localization';

const About = ({language}) => {
    locale.setLanguage(language);
    return (
        <React.Fragment>
            <Banner />
            <h6 className="heading mt-4">{locale.headermenu.about}</h6>
            <div className="container-fluid mt-5 mb-5">
                <div class="row">
                    <div className="col-12 col-sm-12">
                        <h2 className="text-center">{locale.about.underconstruct}</h2>
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
export default connect(mapStateToProps, null) (About);