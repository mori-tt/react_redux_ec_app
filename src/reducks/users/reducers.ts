import initialState from "../store/initialState";
import * as Actions from "./actions";

export const UsersReducer = (state = initialState.users, action: any) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
