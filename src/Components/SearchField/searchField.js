import React from 'react';

const SearchForm = (props) => {
 return (
   <div className="field">
    <p className="control has-icons-left">
      <input className="input" type="text" placeholder="Search..." onChange={props.handleOnChange} />
      <span className="icon is-small is-left">
        <i className="fas fa-search"></i>
      </span>
    </p>
  </div>
 )
}

export default SearchForm;
