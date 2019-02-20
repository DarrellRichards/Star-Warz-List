import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import ListWars from './Components/ListWar/listWar';
import SearchForm from './Components/SearchField/searchField';
import SortOrder from './Components/SortOrder/sortOrder';
import Loader from './Components/Loader/loader';
import ErrorComponent from './Components/ErrorComponent/errorComponent';
import { fetchPeople, searchPerson, pageNextResult } from './Redux/actions/starWars';

import './index.sass';

class Main extends React.Component {
  state = {
    sortOrder: null,
  }
  componentDidMount() {
    this.props.dispatch(fetchPeople());
    this.onHandleChange = this.onHandleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onHandleChange(evt) {
   evt.preventDefault();
   if (evt.target.value !== '') {
    this.props.dispatch(searchPerson(evt.target.value));
   } else {
    this.props.dispatch(fetchPeople());
   }
  }

  handlePageClick(data) {
   if (data.selected === 0) {
    if (this.props) {
     this.props.dispatch(pageNextResult(1));
    }
   } else {
    this.props.dispatch(pageNextResult(data.selected + 1));
   }
  }

  handleChange(evt) {
   evt.preventDefault();
   this.setState({ sortOrder: evt.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-multiline is-mobile is-tablet main-container">
         <div className="column is-6">
          <SearchForm handleOnChange={this.onHandleChange} />
         </div>
         <div className="column is-6">
          <SortOrder handleChange={this.handleChange} />
         </div>
         <div className="column is-12">
          <ErrorComponent error={this.props.error} />
          <Loader fetching={this.props.fetching} />
          <ListWars people={this.props.people} sortOrder={this.state.sortOrder} />
          <section className="pagination-container">
            <ReactPaginate previousLabel={"previous"}
              nextLabel={"next"}
              initialPage={0}
              pageCount={this.props.pages}
              pageRangeDisplayed={this.props.pages}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
           <p className="totalCount">Total Result Count: {this.props.count}</p>
          </section>
         </div>
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
      fetching: store.starWars.fetching,
      fetched: store.starWars.fetched,
      people: store.starWars.people,
      pages: store.starWars.pages,
      count: store.starWars.peopleCount,
      error: store.starWars.error
  })
)(Main);
