
// Create a shelf reducer. Boilerplate stuff below. 
const pets = (state = [], action) => {
    switch (action.type) {
    case 'SET_PETS':
        return action.payload;
    case 'CLEAR_PETS':
        return [];
    default:
        return state;
    }
}

export default pets;
