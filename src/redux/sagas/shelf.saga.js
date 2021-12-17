import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//Kesley's fetchItem (GET) saga function here
//our functions!

function* createItem(action) {
    console.log('createItem action:', action);

    const response = yield axios({
        method: 'POST',
        url: '/api/shelf',
        data: {
           item: action.payload
        }
    })

    yield put({ type: 'FETCH_ITEMS' })
}
function* shelfItems() {
    yield takeEvery('CREATE_ITEM', createItem);
}

export default createItem
