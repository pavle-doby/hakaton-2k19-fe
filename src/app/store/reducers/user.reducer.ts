import { Action } from "@ngrx/store";
import {
  USER_LOG_IN_SUCCESS,
  UserLogInSuccess,
  USER_SIGN_IN,
  USER_SIGN_IN_RES,
  UserSingInRes
} from "../actions";
import { UserAuth } from "src/app/models/userAuth";

export default function(state: UserAuth, action: Action) {
  switch (action.type) {
    case USER_SIGN_IN_RES: {
      const success = (action as UserSingInRes).success;
      console.log({ success });

      return { ...state };
    }
    case USER_LOG_IN_SUCCESS: {
      const user = (action as UserLogInSuccess).user;

      return { ...(state = user) };
    }
    default: {
      return state;
    }
  }
}
