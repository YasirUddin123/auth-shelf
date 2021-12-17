// Maybe Kelsey's shelfItems reducer goes here
// Create a shelf reducer. Boilerplate stuff below.
const shelfItems = (state = [], action) => {
    switch (action.type) {
    case 'SET_SHELFITEMS':
        return action.payload;
    case 'CLEAR_SHELFITEMS':
        return [];
    default:
        return state;
    }
}

export default shelfItems;
