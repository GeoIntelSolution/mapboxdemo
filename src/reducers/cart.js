// import { ADDED_TO_CART } from '../constant';

const ADDED_TO_CART="";

export default (state = [], action) => {
  switch (action.type) {
    case ADDED_TO_CART:
      return [...state, action.payload];

    default:
      return state;
  }
}