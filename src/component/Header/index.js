import React, { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, useLocation } from 'react-router-dom';

import { locale } from '../../localization';
import { setLanguage } from "../../ducks/Lang/actions";

import Logo from '../../styles/images/logo.jpg';
import './header.css';

const Header = ({setLanguage, language}) => {
    const [menu, toggleMenu] = useState(false);
    const location = useLocation();

    React.useEffect(()=>{
        toggleMenu(false);
        window.scrollTo(0,0);
    }, [location]);

    function changeLang(event) {
        setLanguage(event.target.value);
        toggleMenu(false);
        window.scrollTo(0,0);
    }
    locale.setLanguage(language);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container px-2">
                <img src={Logo} className='logo' alt="logo" />
                <Link className="navbar-brand" to="/"><p className="m-0">{locale.name}</p><p className="m-0">{locale.place}</p></Link>
                <button className="navbar-toggler" type="button" onClick={() => toggleMenu(!menu)} aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className={menu ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">{locale.headermenu.home}</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/gallery">{locale.headermenu.gallery}</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/generalInfo">{locale.headermenu.generalInfo}</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">{locale.headermenu.contact}</Link></li>
                        <li className="nav-item">
                            <select name="cars" className="language" onChange={changeLang}>
                                <option value="ta">தமிழ்</option>
                                <option value="en">English</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        language: state.language
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setLanguage: setLanguage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Header)