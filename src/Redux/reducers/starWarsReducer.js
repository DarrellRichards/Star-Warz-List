let startingState = {
    fetched: false,
    fetching: false,
    people: [],
    peopleCount: 0,
    pages: 0,
    error: null,
    person: null,
}

const reducer = (state = startingState, action) => {
    switch(action.type) {
        case "START_FETCHING_PEOPLE":
         return Object.assign({}, state, {
           fetching: true,
           fetched: false,
           error: null
         });
        case "FETCHING_PEOPLE_SUCCESS":
         return Object.assign({}, state, {
           fetching: false,
           fetched: true,
           people: action.people,
           peopleCount: action.peopleCount,
           pages: action.pages,
           error: null
         });
        case "START_SEARCHING_PEOPLE":
         return Object.assign({}, state, {
           fetching: true,
           fetched: false,
           people: [],
           peopleCount: 0,
           pages: 0,
           error: null
         });
        case "FETCHING_PEOPLE_ERROR":
         return Object.assign({}, state, {
           fetching: false,
           fetched: true,
           people: [],
           peopleCount: 0,
           pages: 0,
           error: 'There was a error Fetching'
         });
        default:
            return { ...state }
    }
}

export default reducer
