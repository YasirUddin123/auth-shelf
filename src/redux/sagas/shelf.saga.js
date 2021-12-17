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
        // update shelf items reducer with DB response.data
        yield put({
            type: 'SET_SHELF_ITEMS',
            payload: response.data
        })
    } catch(err) {
        console.error('fetchShelfItems error', err);
    }
}; // end fetchShelfItems


// function to intercept dispatches
function* shelfItemsSaga() {
    yield takeEvery('FETCH_SHELF_ITEMS', fetchShelfItems);
};

export default shelfItemsSaga;