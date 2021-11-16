import React from 'react';
import { connect } from 'react-redux';
import { locale } from '../localization';

import './styles.css';

const Banner = ({language}) => {
    locale.setLanguage(language);
    return (
        <header className="banner-bg bg-gradient text-white">
            <div className="container px-4 text-center">
                <h1 className="fw-bolder">{locale.banner.txt1}</h1>
                <p className="lead">{locale.banner.txt2}</p>
                <p className="lead">{locale.banner.txt3}</p>
            </div>
        </header>
    );
};
const mapStateToProps = (state) => {
    return {
        language: state.language
    };
}
export default connect(mapStateToProps, null) (Banner);