import { connect } from 'react-redux';
import * as actions from './actions';
import StatsButton from './StatsButton';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  saveCal: () => dispatch(actions.saveCal),
  makeRequest: () => dispatch(actions.makeRequest({ secret: 'key' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsButton);