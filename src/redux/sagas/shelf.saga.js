import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// saga function to axios GET shelf items
function* fetchShelfItems(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/shelf'
        })
        // TO DO: update shelf items reducer
    } catch(err) {
        console.error('fetchShelfItems error', err);
    }
}; // end fetchShelfItems


// function to intercept dispatches
function* shelfItemsSaga() {
    yield takeEvery('FETCH_SHELF_ITEMS', fetchShelfItems);
};

export default shelfItemsSaga;


// function* fetchPets(action) {
//     try {
//         const response = yield axios({
//             method: 'GET',
//             url: '/api/pets'
//         })
//         console.log(response.data)
//         yield put({
//             type: 'SET_PETS',
//             payload: response.data
//         })
//     } catch (err) {
//         console.error('fetchPets error', err)
//     }
// }

// function* createPet(action) {
//     console.log('createPet action:', action);
//     // POST the new pet
//     const response = yield axios({
//         method: 'POST',
//         url: '/api/pets',
//         data: {
//             petName: action.payload
//         }
//     })
//     // Re-ren the fetchPets function
//     yield put({ type: 'FETCH_PETS' })

// }


// function* petsSaga() {
//     yield takeEvery('FETCH_PETS', fetchPets);
//     yield takeEvery('CREATE_PET', createPet);
// }