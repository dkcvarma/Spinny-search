import { connect } from 'react-redux';
import { getSearchResults as fetchSearchResults } from '../../actions';

const mapStateToProps = state => {
  return {
    searchResults: state.results,
    showLoadMore: state.showLoadMore,
    showLoader: state.showLoader,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchResults: (query, page) => dispatch(fetchSearchResults(query, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
