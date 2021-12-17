import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

function ShelfPage() {

  const [descriptionInput, setDescriptionInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const dispatch = useDispatch();
  // access shelfItems reducer
  const shelfItems = useSelector(store => store.shelfItems)
  const user = useSelector(store => store.user)

  const onItemAdd = () => {
    // console.log('Button works!')
    const item = {
      description: descriptionInput,
      image_url: imageInput
    }
    dispatch({
      type: 'CREATE_ITEM',
      payload: item
    })
  };

  // setup dispatch to FETCH_SHELF_ITEMS on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF_ITEMS' })
  }, []);

  function deleteItem (itemID) {
    dispatch ({
      type: 'DELETE_ITEM',
      payload: itemID
    })
  }

  return (
    <div className="container">

      <h2>Shelf</h2>
      <form onSubmit={() => {onItemAdd()}}>
        <input
          placeholder="item description"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
        <input
          placeholder="item image URL"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
        />
        <button>Add Item</button>
      </form>
      <p>All of the available items can be seen here.</p>

      <ul>
        {shelfItems.map((item) => {
          return <li key={item.id}><p>{item.description}</p>
            <br />
            <img
              src={item.image_url}
              alt="item image"
              width="200"
              height="200"
            >
            </img>
            {item.user_id === user.id && <button onClick={() => {deleteItem(item.id)}}>Delete</button>}
          </li>
        })}
      </ul>

    </div>
  );
};

export default ShelfPage;
