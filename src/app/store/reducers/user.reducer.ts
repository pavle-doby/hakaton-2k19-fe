import { Action } from "@ngrx/store";
import {
  USER_LOG_IN_SUCCESS,
  UserLogInSuccess,
  USER_SIGN_IN,
  USER_SIGN_IN_RES,
  UserSingInRes,
  USER_LOG_IN_AS_GUEST,
  UserLogInAsGuest
} from "../actions";
import { UserAuth } from "src/app/models/userAuth";
import { User } from "src/app/models/user";

const initState = null;

export default function(state: User = initState, action: Action) {
  switch (action.type) {
    case USER_SIGN_IN_RES: {
      const success = (action as UserSingInRes).success;

      return { ...state };
    }
    case USER_LOG_IN_SUCCESS: {
      const user = (action as UserLogInSuccess).user;

      return { ...(state = user) };
    }
    case USER_LOG_IN_AS_GUEST: {
      const user = (action as UserLogInAsGuest).user;

      return { ...(state = user) };
    }
    default: {
      return state;
    }
  }
}
