const LOAD = "product/LOAD";
// const LOAD_TYPES = "spot/LOAD_TYPES";
const ADD_ONE = "product/ADD_ONE";

const load = (spot) => ({
  type: LOAD,
  payload: spot,
});

// const loadTypes = (types) => ({
//   type: LOAD_TYPES,
//   types,
// });

const addOnespot = (spot) => ({
  type: ADD_ONE,
  spot,
});

export const getspot = () => async (dispatch) => {
  const res = await fetch(`/api/spots`);
  if (res.ok) {
    const list = await res.json();
    dispatch(load(list));
  }
};

// export const getOnespot = (id) => async (dispatch) => {
//   const res = await fetch(`/api/spot/${id}`);

//   if (res.ok) {
//     const type = await res.json();
//     dispatch(addOnespot(type));
//   }
// };

// const initialState = {
//   list: [],
//   types: [],
// };

const sortList = (list) => {
  return list
    .sort((spotA, spotB) => {
      return spotA.no - spotB.no;
    })
    .map((spot) => spot.id);
};

const initialState = { spot: null };

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      return { ...state, spot: action.payload };
    }

    default:
      return state;
  }
};

export default spotReducer;
