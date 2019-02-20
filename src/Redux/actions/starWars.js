import axios from 'axios';

export const fetchPeople = () => {
 return (dispatch) => {
  dispatch({ type: 'START_FETCHING_PEOPLE' });
  axios.get('https://swapi.co/api/people/')
   .then(results => {
    let pageCount = Math.floor(results.data.count / 10);
    dispatch({ type: 'FETCHING_PEOPLE_SUCCESS', people: results.data.results, peopleCount: results.data.count, pages: pageCount });
   })
   .catch(err => {
    dispatch({ type: 'FETCHING_PEOPLE_ERROR' });
    return err;
   })
 }
}

export const pageNextResult = (page) => {
 return (dispatch) => {
  dispatch({ type: 'START_SEARCHING_PEOPLE' });
  axios.get(`https://swapi.co/api/people/?page=${page}`)
   .then(results => {
    if (results.data.count === 0) {
     dispatch({ type: 'FETCHING_PEOPLE_ERROR' });
    } else {
     let pageCount = Math.floor(results.data.count / 10);
     dispatch({ type: 'FETCHING_PEOPLE_SUCCESS', people: results.data.results, peopleCount: results.data.count, pages: pageCount });
    }
   })
   .catch(err => {
    dispatch({ type: 'FETCHING_PEOPLE_ERROR' });
    return err;
   })
 }
}

export const searchPerson = (person) => {
 return (dispatch) => {
  dispatch({ type: 'START_SEARCHING_PEOPLE' });
  axios.get(`https://swapi.co/api/people/?search=${person}`)
   .then(results => {
    if (results.data.count === 0) {
     dispatch({ type: 'FETCHING_PEOPLE_ERROR' });
    } else {
     let pageCount = Math.floor(results.data.count / 10);
     dispatch({ type: 'FETCHING_PEOPLE_SUCCESS', people: results.data.results, peopleCount: results.data.count, pages: pageCount });
    }
   })
   .catch(err => {
    dispatch({ type: 'FETCHING_PEOPLE_ERROR' });
    return err;
   })
 }
}
