import React from 'react'

const ErrorComponent = (props) => {
    const error = props.error;
    if(error) {
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
                <p className="errorMessage">We couldn't find the droids you were looking for.</p>
                <p className="searchQuery">Please try a different search query</p>
               </div>
             </div>
           </div>
          </section>
        )
    }
    return null
}

export default ErrorComponent;
