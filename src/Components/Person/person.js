import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
 
const Person = () => {
    let { name } = useParams();
    let history = useHistory()
    return (
        <section className="level">
          <div className="level-left error">
            <div className="level-item">
              <p className="subtitle is-5">
                <i className="fas fa-exclamation-triangle fa-3x"></i>
              </p>
            </div>
            <div className="level-item">
              <div>
               <p className="errorMessage">{name}</p>
               <button onClick={() => history.goBack()}>Back to Results</button>
              </div>
            </div>
          </div>
         </section>
       )
}

export default Person;