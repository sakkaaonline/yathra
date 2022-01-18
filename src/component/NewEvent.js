import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Meeting2022 from '../styles/images/Meeting2022.jpg';
import KanthaSasti from '../styles/images/kandhasasti.jpg';
import Thaipusam from '../styles/images/Thaipusam.jpg';
import Year1 from '../styles/images/Year1.jpeg';
import Year2 from '../styles/images/Year2.jpeg';
import Year3 from '../styles/images/Year3.jpg';
import Year4 from '../styles/images/Year4.jpg';
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
                        <h5 className="text-center content-head">{locale.events.event4_head}<img src={NewImg} className='newImg' alt="new" /></h5>
                        <img src={Thaipusam} className='imgEvent' alt="Thaipusam" />
                        <p className="text-center">{locale.events.event4_desc1}</p>
                        <img src={Vel} className='velImg' alt="vel" />
                    </div>
                    <div className="col-12 col-sm-12">
                        <h5 className="text-center content-head">{locale.events.event5_head}<img src={NewImg} className='newImg' alt="new" /></h5>
                        <img src={Year1} className='imgEvent' alt="Year1" />
                        <img src={Year2} className='imgEvent' alt="Year2" />
                        <img src={Year3} className='imgEvent' alt="Year3" />
                        <img src={Year4} className='imgEvent' alt="Year4" />
                        <p className="text-center">{locale.events.event5_desc1}</p>
                        <img src={Vel} className='velImg' alt="vel" />
                    </div>
                    <div className="col-12 col-sm-12">
                        <h5 className="text-center content-head">{locale.events.event2_head}</h5>
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