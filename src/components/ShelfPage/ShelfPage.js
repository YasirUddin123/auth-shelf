// import React from 'react';

// function ShelfPage() {
//   return (
//     <div className="container">
//       <h2>Shelf</h2>
//       <p>All of the available items can be seen here.</p>
//     </div>
//   );
// }

// export default ShelfPage;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function ShelfPage() {

    const [descriptionInput, setDescriptionInput] = useState('');
    const [imageInput, setImageInput] = useState('');

    const dispatch = useDispatch();

    const onItemAdd = (e) => {
        e.preventDefault();
        const item={
          description: descriptionInput,
          image_url: imageInput
        }
        dispatch({
            type: 'CREATE_ITEM',
            payload: item
        })
    }

    return (
        <div className="container">
            <h2>Shelf</h2>
            <form onSubmit={onItemAdd}>
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
        </div>
    );
};

export default ShelfPage;
