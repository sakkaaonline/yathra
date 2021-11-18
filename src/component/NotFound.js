import React from 'react';
import Banner from './Banner';
import Logo from '../styles/images/logo.png';

const NotFound = () => {
    return (
        <React.Fragment>
            <Banner />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <img src={Logo} className='notfound' alt="Not Found" />
                    </div>
                </div>
            </div>
            <h1 className="not-fount-txt">404 Not Found</h1>
        </React.Fragment>
    );
};
export default NotFound;