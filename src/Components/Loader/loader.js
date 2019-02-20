import React from 'react';

const Loader = (props) => {
    const fetching = props.fetching;
    if(fetching) {
        return (
            <div className="spinner_loader">Loading...</div>
        )
    }

    return null
}

export default Loader;
