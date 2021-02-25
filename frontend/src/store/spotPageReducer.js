const LOAD = "payload/LOAD";

const load = (payload) => ({
  type: LOAD,
  payload,
});

export const getOnespot = () => async (dispatch) => {
  const response = await fetch(`/api/spots`);

  if (response.ok) {
    const oneSpot = await response.json();
    dispatch(load(oneSpot));
  }
};

const initialState = {
  list: [],
  types: [],
};

const sortList = (list) => {
  return list
    .sort((spotA, spotB) => {
      return spotA.no - spotB.no;
    })
    .map((spot) => spot.id);
};

const spotPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allSpots = {};
      action.payload.forEach((spot) => {
        allSpots[spot.id] = spot;
      });
      return {
        ...allSpots,
        ...state,
        payload: sortList(action.payload),
      };
    }
    default:
      return state;
  }
};

export default spotPageReducer;
