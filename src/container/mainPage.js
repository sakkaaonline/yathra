import { connect } from 'react-redux';
import MainPage from '../component/MainPage.js';
import { getData } from '../ducks/MainPage/operations';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        users: state.TestData.userslist,
        language: state.language,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getData: getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (MainPage)