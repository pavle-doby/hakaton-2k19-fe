import { Action } from "@ngrx/store";
import { UserAuth } from "src/app/models/userAuth";
import { UserRegister } from "../models/userRegister";

export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_SIGN_IN_RES = "USER_SIGN_IN_RES";

export class UserSingIn implements Action {
  type: string = USER_SIGN_IN;
  constructor(public user: UserRegister) {}
}
export class UserSingInRes implements Action {
  type: string = USER_SIGN_IN_RES;
  constructor(public success: boolean) {}
}

export const USER_LOG_IN_SUCCESS = "USER_LOG_IN_SUCCESS";
export class UserLogInSuccess implements Action {
  type: string = USER_LOG_IN_SUCCESS;
  constructor(public user: UserAuth) {}
}
