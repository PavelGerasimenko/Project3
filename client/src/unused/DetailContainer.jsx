import { connect } from 'react-redux';
import * as selectors from './selectors';
import Detail from './Detail';

const mapStateToProps = (state) => ({
  events: selectors.getTodaysEvents(state),
});

export default connect(mapStateToProps)(Detail);