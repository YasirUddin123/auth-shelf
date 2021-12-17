import React from 'react';
// added imports
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function ShelfPage() {

  const dispatch = useDispatch();
  // access shelfItems reducer
  const pets = useSelector(store => store.pets)

  // setup dispatch to FETCH_SHELF_ITEMS on page load
  useEffect(() => {
    dispatch({type: 'FETCH_SHELF_ITEMS'})
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;



// import { useDispatch, useSelector } from 'react-redux'


// function Pets() {

//   useEffect(() => {
//     dispatch({ type: 'FETCH_PETS' })
//   }, [])

//   const [petNameInput, setPetNameInput] = useState('');
//   const dispatch = useDispatch();
//   const pets = useSelector(store => store.pets)

//   const onPetAdd = (e) => {
//     e.preventDefault();
//     // send a dispatch with petNameInput's value included
//     dispatch({
//       type: 'CREATE_PET',
//       payload: petNameInput
//     })
//   }

//   return(
//     <div className="centered container">
//       <h1>Add a Pet:</h1>
//       <form onSubmit={onPetAdd}>
//         <input
//           placeholder="pet name"
//           value={petNameInput}
//           onChange={(e) => setPetNameInput(e.target.value)}
//         />
//         <button>Add Pet</button>
//       </form>
//       <h1>Here are your pets!</h1>
//       <ul>
//         {pets.map((pet) => {
//           return <li key={pet.id}>{pet.name}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default Pets;
