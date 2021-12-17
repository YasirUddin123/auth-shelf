import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// saga function to axios GET shelf items
function* fetchShelfItems(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/shelf'
        })
        console.log('fetchShelfItems, response from DB:', response.data);
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