import React from 'react';
import { connect } from 'react-redux';
import { locale } from '../../localization';

const Footer = ({language}) => {
    locale.setLanguage(language);
    return (
        <footer className="py-5 bg-dark">
            <div className="container px-4"><p className="m-0 text-center text-white">{locale.footer.title1} &copy; {locale.footer.title2}</p></div>
        </footer>
    )
}
const mapStateToProps = (state) => {
    return {
        language: state.language
    };
}
export default connect(mapStateToProps, null) (Footer)