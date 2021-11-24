import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Meeting2022 from '../styles/images/Meeting2022.jpg';
import KanthaSasti from '../styles/images/kandhasasti.jpg';
import NewImg from '../styles/images/newgif.gif';
import Vel from '../styles/images/Vel.png';
import { locale } from '../localization';

const Events = ({language}) => {
    locale.setLanguage(language);
    return (
        <React.Fragment>
            <Banner />
            <h6 className="heading mt-4">{locale.events.header}</h6>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <h5 className="text-center content-head">{locale.events.event3_head}</h5>
                        <p className="text-center">{locale.events.event3_desc1}</p>
                        <img src={Vel} className='velImg' alt="vel" />
                    </div>
                    <div className="col-12 col-sm-12">
                        <h5 className="text-center content-head">{locale.events.event2_head}<img src={NewImg} className='newImg' alt="new" /></h5>
                        <img src={Meeting2022} className='imgEvent' alt="Meeting2022" />
                        <p className="text-center">{locale.events.event2_desc1}</p>
                        <img src={Vel} className='velImg' alt="vel" />
                    </div>
                    <div className="col-12 col-sm-12">
                        <h5 className="text-center content-head">{locale.events.event1_head}</h5>
                        <img src={KanthaSasti} className='imgEvent' alt="KanthaSasti" />
                        <p className="text-center">{locale.events.event1_desc1}</p>
                        <img src={Vel} className='velImg' alt="vel" />
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
export default connect(mapStateToProps, null) (Events);