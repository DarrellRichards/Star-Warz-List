import React from 'react';

const SortOrder = (props) => {
 return (
  <div className="field is-pulled-right">
    <div className="control has-icons-left">
      <div className="select">
        <select onChange={props.handleChange} defaultValue="A-Z">
          <option>Sort Results</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div className="icon is-small is-left">
        <i className="fas fa-sort"></i>
      </div>
    </div>
  </div>
 )
}

export default SortOrder;
