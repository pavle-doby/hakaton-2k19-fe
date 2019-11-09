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
import { MyToken } from "src/app/models/token";

const initState = null;

export default function(state: MyToken = initState, action: Action) {
  switch (action.type) {
    case USER_LOG_IN_SUCCESS: {
      const token = (action as UserLogInSuccess).token;

      return { ...(state = token) };
    }
    default: {
      return state;
    }
  }
}
