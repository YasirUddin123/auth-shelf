import React from 'react';
// added imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function ShelfPage() {

  const dispatch = useDispatch();
  // access shelfItems reducer
  const shelfItems = useSelector(store => store.shelfItems)

  // setup dispatch to FETCH_SHELF_ITEMS on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF_ITEMS' })
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>

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
          </li>
        })}
      </ul>

    </div>
  );
};

export default ShelfPage;
