import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { locale } from '../localization';

const Comment = ({ postid, data, language }) => {
    locale.setLanguage(language);
    let userData = {
        postid: postid,
        name: '',
        mobile: '',
        comments: ''
    };
    const [user, setUser] = React.useState(userData);
    const [saved, setSaved] = React.useState(false);

    const submit = e => {
        e.preventDefault();
        setUser({ ...user, postid: postid });
        fetch(`${process.env.PUBLIC_URL}/post.php`, {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
            if (json) {
                setSaved(true);
                setUser({ ...user, name: '', mobile: '', comments: '' });
            }       
        })
        .catch((error) => console.log(error));
    };
    return (
            <div className="card text-dark">
                <div className="overallcomment-area">
                    <div className="comment-area">
                        {
                            data && data.length > 0 ? data.map((comment) => (
                                <div className="card-body border-bottom p-2">
                                    <div className="rounded-circle shadow-1-strong me-3 avatar">{comment.name.substring(0, 2).toUpperCase()}</div>
                                    <div className="d-flex flex-start">
                                        <div>
                                            <h6 className="fw-bold mb-0">{comment.name}&nbsp;<span className="mobile">({comment.mobile.replace(/\d(?=\d{5})/g, "X")})</span></h6>
                                            <div className="d-flex align-items-center commented-on mb-3">
                                                <p className="fw-light mb-0 fst-italic">&nbsp;commented on &nbsp;</p>
                                                <p className="fw-light mb-0 fst-italic">{comment.date}</p>
                                            </div>
                                            <p class="mb-0">{comment.comments}</p>
                                        </div>
                                    </div>
                                </div>
                            )) : <p className="nocomments">{locale.events.nocomments}</p>
                        }
                    </div>
                    <div className="card-body p-2">
                        <h6 className="border-bottom pb-1">{locale.events.commentusrhead}</h6>
                        {
                            saved && <div className="alert alert-success" role="alert">{locale.events.saved}</div>
                        }
                        <form onSubmit={submit}>
                            <div class="mb-3">
                                <label for="name" className="form-label required">{locale.events.usrname}</label>
                                <input
                                    type="text"
                                    pattern="[a-zA-Z0-9\s]+"
                                    className="form-control"
                                    id="name"
                                    placeholder={locale.events.holderusrname}
                                    maxLength={15}
                                    minLength={5}
                                    value={user.name}
                                    onChange={e => setUser({ ...user, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="mobile" className="form-label required">{locale.events.usrmobile}</label>
                                <input
                                    type="text"
                                    pattern="[0-9]+"
                                    className="form-control"
                                    id="mobile"
                                    maxLength={13}
                                    minLength={10}
                                    value={user.mobile}
                                    placeholder={locale.events.holderusrmobile}
                                    onChange={e => setUser({ ...user, mobile: e.target.value })}
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="comment" className="form-label required">{locale.events.usrcomment}</label>
                                <textarea
                                    className="form-control"
                                    id="comment"
                                    rows="3"
                                    placeholder={locale.events.holderusrcomment}
                                    value={user.comments}
                                    onChange={e => setUser({ ...user, comments: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mb-3">{locale.events.usrsubmit}</button>
                        </form>
                    </div>
                </div>
             </div>
            )
}

Comment.propTypes = {
  data: PropTypes.shape.isRequired
};

const mapStateToProps = (state) => {
    return {
        language: state.language
    };
}
export default connect(mapStateToProps, null) (Comment);