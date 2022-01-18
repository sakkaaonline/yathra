import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import { locale } from '../localization';
import MuruganPhoto from '../styles/images/kandhasasti.jpg';

const Facebook = ({language}) => {
    locale.setLanguage(language);
    const url = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E0%25AE%25AA%25E0%25AE%25B4%25E0%25AE%25A9%25E0%25AE%25BF-%25E0%25AE%25AA%25E0%25AE%25BE%25E0%25AE%25A4%25E0%25AE%25AF%25E0%25AE%25BE%25E0%25AE%25A4%25E0%25AF%258D%25E0%25AE%25A4%25E0%25AE%25BF%25E0%25AE%25B0%25E0%25AF%2588-%25E0%25AE%2595%25E0%25AF%2581%25E0%25AE%25B4%25E0%25AF%2581-%25E0%25AE%25AE%25E0%25AE%25B0%25E0%25AF%2581%25E0%25AE%25A4%25E0%25AE%25B5%25E0%25AE%259E%25E0%25AF%258D%25E0%25AE%259A%25E0%25AF%2587%25E0%25AE%25B0%25E0%25AE%25BF-112455264587470%2F&tabs=timeline&width=${window.screen.width-20}&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`
    return (
        <React.Fragment>
            <Banner />
            <h6 className="heading mt-4">{locale.headermenu.facebookpage}</h6>
            <p className='content mt-4 text-center'>{locale.mainpage.list29}</p>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-12 mt-1 mb-5">
                        <iframe 
                        src={url}
                        width={window.screen.width-20}
                        height='500'
                        scrolling='no'
                        frameborder='0'
                        allowfullscreen='true'
                        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'>
                        </iframe>
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
export default connect(mapStateToProps, null) (Facebook);