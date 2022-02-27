import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import ImageGallery from 'react-image-gallery';
import NewImg from '../styles/images/newgif.gif';
import Vel from '../styles/images/Vel.png';
import Comment from "./Comment";
import FacebookEmbed from "./FacebookEmbed";
import { locale } from '../localization';

const Events = ({language}) => {
    locale.setLanguage(language);
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [comment, setComment] = React.useState(false);
    const [commentdata, setCommentData] = React.useState([]);
    const [clickedpost, setClickPost] = React.useState('');
    React.useEffect(() => {
      const url = `${process.env.PUBLIC_URL}/json/yathra.json`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error));
    }, []);
  
    React.useEffect(() => {
      if (data.length !== 0) {
        setIsLoading(false);
      }
    }, [data]);
    const d = new Date();
    const year = d.getFullYear();
    const month = (d.getMonth()+1).length > 1 ? (d.getMonth()+1) : '0'+(d.getMonth()+1);
    const day = d.getDate().length > 0 ? d.getDate() : '0'+d.getDate();
    const hours = d.getHours().toString().length > 1 ? d.getHours() : '0'+d.getHours();
    const minutes = d.getMinutes().toString().length > 1 ? d.getMinutes() : '0'+d.getMinutes();
    const seconds = d.getSeconds().toString().length > 1 ? d.getSeconds() : '0'+d.getSeconds();
    const todayDate = year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
    const currentDate = new Date(todayDate.toString()).getTime();
    const currentDomain = `${process.env.PUBLIC_URL}/images/`;
    let sliderImages = (imgArray = []) => {
      return imgArray.map((img) => {
        return {
          original: `${currentDomain}${img}`,
          thumbnail: `${currentDomain}${img}`,
        }
      })
    }
    const showDateFrom = (date) => {
      return new Date(date).getTime()
    }

    function showcommentbox(postid) {
      const url = `${process.env.PUBLIC_URL}/getpost.php?postid=${postid}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setClickPost(postid);
          setCommentData(json);
          setComment(true);
        })
        .catch((error) => console.log(error));
    }

    function closecommentbox() {
      setComment(false);
    }
    return (
        <React.Fragment>
            <Banner />
            <h6 className="heading mt-4">{locale.events.header}</h6>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                {isLoading ? (
                  <div className="col-12 col-sm-12">
                    <div class="alert alert-success text-center" role="alert">
                      {locale.events.loadingtxt}
                    </div>
                  </div>
                ) : (
                  data.map((user) => (
                    <div className="col-12 col-sm-12">
                      { user.type === 'post' && currentDate > showDateFrom(user.showFromDate) &&
                        <><div className="yathra card text-center mb-5">
                          <div className="card-header content-head">{user.heading}{user.newFlag && <img src={NewImg} className='newImg' alt="new" />}</div>
                          <div className="card-body">
                            {user.primaryImg.map((main, index) => (
                              <img
                                key={`imgprimary${index}`}
                                src={`${currentDomain}${main}`}
                                alt={`imgprimary${index}`}
                                className="imgEvent mb-2" />
                            ))}
                            <p className="card-text mx-2">{user.desc}</p>
                            {user.secondaryImg.map((main, index) => (
                              <img
                                key={`imgsecondary${index}`}
                                src={`${currentDomain}${main}`}
                                alt={`imgsecondary${index}`}
                                className="imgEvent mb-2" />
                            ))}
                          </div>
                          {
                            user.comments && (
                              <div class="card-footer text-muted">
                                <span onClick={() => showcommentbox(user.id)}>
                                  <img
                                      key={`comment${user.id}`}
                                      src={`${currentDomain}comment.png`}
                                      alt={`comment${user.id}`}
                                      className="comment" />
                                    <span>{locale.events.comment}</span>
                                </span>
                              </div>
                            )
                          }                      
                        </div><img src={Vel} className='velImg' alt="vel" /></>
                      }
                      { user.type === 'videopost' && currentDate > showDateFrom(user.showFromDate) &&
                        <><div className="yathra card text-center mb-5">
                          <div className="card-header content-head">{user.heading}{user.newFlag && <img src={NewImg} className='newImg' alt="new" />}</div>
                          <div className="card-body">
                            {user.primaryImg.map((main) => (
                              <FacebookEmbed embedId={main} />
                            ))}
                            <p className="card-text mx-2">{user.desc}</p>
                          </div>
                          {
                            user.comments && (
                              <div class="card-footer text-muted">
                                <span onClick={() => showcommentbox(user.id)}>
                                  <img
                                      key={`comment${user.id}`}
                                      src={`${currentDomain}comment.png`}
                                      alt={`comment${user.id}`}
                                      className="comment" />
                                    <span>{locale.events.comment}</span>
                                </span>
                              </div>
                            )
                          }
                        </div><img src={Vel} className='velImg' alt="vel" /></>
                      }
                      {
                        user.type === 'gallery' && currentDate > showDateFrom(user.showFromDate) &&
                        <><div className="yathra card text-center mb-5">
                          <div className="card-header content-head">{user.heading}{user.newFlag && <img src={NewImg} className='newImg' alt="new" />}</div>
                          <div className="card-body">
                            <ImageGallery items={sliderImages(user.primaryImg)} slideInterval={6000} infinite={true} showFullscreenButton={false} useBrowserFullscreen={false} autoPlay={true} showBullets={true} />
                            {user.desc && <p className="card-text mx-2">{user.desc}</p>}
                          </div>
                          {
                            user.comments && (
                              <div class="card-footer text-muted">
                                <span onClick={() => showcommentbox(user.id)}>
                                  <img
                                      key={`comment${user.id}`}
                                      src={`${currentDomain}comment.png`}
                                      alt={`comment${user.id}`}
                                      className="comment" />
                                    <span>{locale.events.comment}</span>
                                </span>
                              </div>
                            )
                          }
                        </div><img src={Vel} className='velImg' alt="vel" /></>
                      }
                    </div>
                  ))
                )}
              </div>
            </div>
            {
              comment && (
                <div className={comment ? 'modal fade show d-block' : 'modal fade d-none'} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h6 className="modal-title" id="staticBackdropLabel">{locale.events.recentcomment}<span class="badge bg-primary">{commentdata && commentdata.length > 0 ? commentdata.length : '0'}</span></h6>
                        <button type="button" className="btn-close" onClick={() => closecommentbox()} aria-label="Close"></button>
                      </div>
                      <div className="modal-body comment-body">
                        <Comment postid={clickedpost} data={commentdata} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }           
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