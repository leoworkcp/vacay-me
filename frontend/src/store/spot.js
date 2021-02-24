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

      // const allspot = {};
      // action.spots.forEach((spot) => {
      //   allspot[spot.id] = spot;
      // });
      // return {
      //   ...allspot,
      //   ...state,
      //   list: sortList(action.list),
      // };
    }

    // case LOAD_TYPES: {
    //   return {
    //     ...state,
    //     types: action.types,
    //   };
    // }
    // case ADD_ONE: {
    //   if (!state[action.spot.id]) {
    //     const newState = {
    //       ...state,
    //       [action.spot.id]: action.spot,
    //     };
    //     const spotList = newState.list.map((id) => newState[id]);
    //     spotList.push(action.spot);
    //     newState.list = sortList(spotList);
    //     return newState;
    //   }
    //   return {
    //     ...state,
    //     [action.spot.id]: {
    //       ...state[action.spot.id],
    //       ...action.spot,
    //     },
    //   };
    // }
    // case LOAD_ITEMS: {
    //   return {
    //     ...state,
    //     [action.spotId]: {
    //       ...state[action.spotId],
    //       items: action.items.map((item) => item.id),
    //     },
    //   };
    // }
    // case REMOVE_ITEM: {
    //   return {
    //     ...state,
    //     [action.spotId]: {
    //       ...state[action.spotId],
    //       items: state[action.spotId].filter(
    //         (item) => item.id !== action.itemId
    //       ),
    //     },
    //   };
    // }
    // case ADD_ITEM: {
    //   console.log(action.item);
    //   return {
    //     ...state,
    //     [action.item.spotId]: {
    //       ...state[action.item.spotId],
    //       items: [...state[action.item.spotId], action.item.id],
    //     },
    //   };
    // }
    default:
      return state;
  }
};

export default spotReducer;
