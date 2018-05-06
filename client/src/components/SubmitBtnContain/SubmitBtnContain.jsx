import { connect } from 'react-redux';
import * as actions from './actions';
import SubmitBtn from './SubmitBtn';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  saveCal: () => dispatch(actions.saveCal),
  makeRequest: () => dispatch(actions.makeRequest({ secret: 'key' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsButton);
