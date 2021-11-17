import React, { Component } from 'react';
import Banner from './Banner';
import { locale } from '../localization';
import MuruganPhoto from '../styles/images/Muruga.png';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.loadData = this.loadData.bind(this);
    }
    loadData () {
        this.props.getData();
    }
    render() {
        locale.setLanguage(this.props.language);
        return (
            <React.Fragment>
                <Banner />
                <h6 className="heading mt-4">{locale.mainpage.title}</h6>
                <div className="container-fluid mt-5">
                    <div class="row">
                        <div className="col-12 col-sm-4">
                            <img src={MuruganPhoto} className="img" alt='Muruga' />
                        </div>
                        <div className="col-12 col-sm-8">
                            <p className="content">{locale.mainpage.txt1}</p>
                            <p className="content">{locale.mainpage.txt2}</p>
                            <p className="content">{locale.mainpage.txt3}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <ul className="list-txt">
                                <ol>{locale.mainpage.list1}</ol>
                                <ol>{locale.mainpage.list2}</ol>
                                <ol>{locale.mainpage.list3}</ol>
                                <ol>{locale.mainpage.list4}</ol>
                                <ol>{locale.mainpage.list5}</ol>
                                <ol>{locale.mainpage.list6}</ol>
                                <ol>{locale.mainpage.list7}</ol>
                                <ol>{locale.mainpage.list8}</ol>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6">
                            <ul className="list-txt">
                                <ol>{locale.mainpage.list9}</ol>
                                <ol>{locale.mainpage.list10}</ol>
                                <ol>{locale.mainpage.list11}</ol>
                                <ol>{locale.mainpage.list12}</ol>
                                <ol>{locale.mainpage.list13}</ol>
                                <ol>{locale.mainpage.list14}</ol>
                                <ol>{locale.mainpage.list15}</ol>
                                <ol>{locale.mainpage.list16}</ol>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6 className="heading mt-5">{locale.mainpage.txt5}</h6>
                <div className="container-fluid mt-5">
                    <div class="row">
                        <div className="col-12 col-sm-12">
                            <p className="content">{locale.mainpage.txt6}</p>
                            <p className="content">{locale.mainpage.txt7}</p>
                        </div>
                    </div>
                </div>
                <h6 className="heading text-center mt-5">{locale.mainpage.txt8}</h6>
                <div className="container-fluid mt-5">
                    <div class="row">
                        <div className="col-12 col-sm-12">
                            <ul className="list-txt">
                                <ol>{locale.mainpage.list17}</ol>
                                <ol>{locale.mainpage.list18}</ol>
                                <ol>{locale.mainpage.list19}</ol>
                                <ol>{locale.mainpage.list20}</ol>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6 className="heading mt-5">{locale.mainpage.txt9}</h6>
                <div className="container-fluid mt-5">
                    <div class="row">
                        <div className="col-12 col-sm-12">
                            <ul className="list-txt">
                                <ol>{locale.mainpage.list21}</ol>
                                <ol>{locale.mainpage.list22}</ol>
                                <ol>{locale.mainpage.list23}</ol>
                                <ol>{locale.mainpage.list24}</ol>
                                <ol>{locale.mainpage.list25}</ol>
                                <ol>{locale.mainpage.list26}</ol>
                                <ol>{locale.mainpage.list27}</ol>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-end">{locale.mainpage.contentauthor}</p>
                <h5 className="endtxt mt-5">{locale.banner.txt3}</h5>
            </React.Fragment>
        );
    }
}
export default MainPage;
