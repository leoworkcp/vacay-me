const LOAD = "reviews/LOAD";

const load = (list) => ({
  type: LOAD,
  list,
});

export const getOneReview = (id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${id}`);

  if (response.ok) {
    const oneReview = await response.json();

    // console.log(oneReview);

    dispatch(load(oneReview));
  }
};

const initialState = {
  list: [],
  types: [],
};

const sortList = (list) => {
  return list
    .sort((reviewA, reviewB) => {
      return reviewA.no - reviewB.no;
    })
    .map((review) => review.id);
};

const reviewPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allReviews = {};
      action.list.forEach((review) => {
        allReviews[review.id] = review;
      });
      return {
        ...allReviews,
        ...state,
        list: sortList(action.list),
      };

    default:
      return state;
  }
};

export default reviewPageReducer;
