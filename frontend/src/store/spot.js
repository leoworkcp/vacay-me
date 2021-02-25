// // reducer for  spotSearchPage
// const LOAD = "product/LOAD";

// const load = (spot) => ({
//   type: LOAD,
//   payload: spot,
// });

// export const getspot = () => async (dispatch) => {
//   const res = await fetch(`/api/spots`);
//   if (res.ok) {
//     const list = await res.json();
//     dispatch(load(list));
//   }
// };

// const initialState = {
//   list: [],
//   types: [],
// };

// const sortList = (list) => {
//   return list
//     .sort((spotA, spotB) => {
//       return spotA.no - spotB.no;
//     })
//     .map((spot) => spot.id);
// };

// const spotReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOAD: {
//       return { ...state, spot: action.payload };
//     }
//     default:
//       return state;
//   }
// };

// export default spotReducer;
