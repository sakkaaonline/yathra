import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import { locale } from '../localization';
import MuruganPhoto from '../styles/images/kandhasasti.jpg';

const WhatToDo = ({language}) => {
    locale.setLanguage(language);
    return (
        <React.Fragment>
            <Banner />
            <h6 className="heading mt-4">{locale.whatdo.title}</h6>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <img src={MuruganPhoto} className="img" alt='Muruga' />
                        </div>
                        <div className="col-12 col-sm-8">
                            <p className="content">{locale.whatdo.txt1}</p>
                            <p className="content">{locale.whatdo.txt2}</p>
                            <p className="content">{locale.whatdo.txt3}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <ul className="list-txt">
                                <ol>{locale.whatdo.list1}</ol>
                                <ol>{locale.whatdo.list2}</ol>
                                <ol>{locale.whatdo.list3}</ol>
                                <ol>{locale.whatdo.list4}</ol>
                                <ol>{locale.whatdo.list5}</ol>
                                <ol>{locale.whatdo.list6}</ol>
                                <ol>{locale.whatdo.list7}</ol>
                                <ol>{locale.whatdo.list8}</ol>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6">
                            <ul className="list-txt">
                                <ol>{locale.whatdo.list9}</ol>
                                <ol>{locale.whatdo.list10}</ol>
                                <ol>{locale.whatdo.list11}</ol>
                                <ol>{locale.whatdo.list12}</ol>
                                <ol>{locale.whatdo.list13}</ol>
                                <ol>{locale.whatdo.list15}</ol>
                                <ol>{locale.whatdo.list16}</ol>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6 className="heading mt-5">{locale.whatdo.txt5}</h6>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <p className="content">{locale.whatdo.txt6}</p>
                            <p className="content">{locale.whatdo.txt7}</p>
                        </div>
                    </div>
                </div>
                <h6 className="heading text-center mt-5">{locale.whatdo.txt8}</h6>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <ul className="list-txt">
                                <ol>{locale.whatdo.list17}</ol>
                                <ol>{locale.whatdo.list18}</ol>
                                <ol>{locale.whatdo.list19}</ol>
                                <ol>{locale.whatdo.list20}</ol>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6 className="heading mt-5">{locale.whatdo.txt9}</h6>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <ul className="list-txt">
                                <ol>{locale.whatdo.list21}</ol>
                                <ol>{locale.whatdo.list22}</ol>
                                <ol>{locale.whatdo.list23}</ol>
                                <ol>{locale.whatdo.list24}</ol>
                                <ol>{locale.whatdo.list25}</ol>
                                <ol>{locale.whatdo.list26}</ol>
                                <ol>{locale.whatdo.list27}</ol>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-end">{locale.whatdo.contentauthor}</p>
                <h5 className="endtxt mt-5">{locale.banner.txt3}</h5>
        </React.Fragment>
    );
};
const mapStateToProps = (state) => {
    return {
        language: state.language
    };
}
export default connect(mapStateToProps, null) (WhatToDo);