
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//Kesley's fetchItem (GET) saga function here
//our functions!
function* createShelfItem(action) {
    console.log('createItem action:', action);
    console.log('createShelfItem action.payload:', action.payload);
    const response = yield axios({
        method: 'POST',
        url: '/api/shelf',
        data: action.payload
    });

    yield put({ type: 'FETCH_SHELF_ITEMS' })
    
};

// saga function to axios GET shelf items
function* fetchShelfItems() {
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
    } catch (err) {
        console.error('fetchShelfItems error', err);
    }
}; // end fetchShelfItems


// function to intercept dispatches
function* shelfItemsSaga() {
    yield takeEvery('FETCH_SHELF_ITEMS', fetchShelfItems);
    yield takeEvery('CREATE_ITEM', createShelfItem);
};

export default shelfItemsSaga;
