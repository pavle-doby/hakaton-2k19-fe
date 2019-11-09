import { Action } from "@ngrx/store";
import { UserAuth } from "src/app/models/userAuth";
import { UserRegister } from "../models/userRegister";
import { User } from "../models/user";
import { MyToken } from "../models/token";
import { BeeHiveActionsState } from "../models/beeHiveActionsState";

export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_SIGN_IN_RES = "USER_SIGN_IN_RES";

export class UserSingIn implements Action {
  type: string = USER_SIGN_IN;
  constructor(public user: User) {}
}
export class UserSingInRes implements Action {
  type: string = USER_SIGN_IN_RES;
  constructor(public success: boolean) {}
}

export const USER_LOG_IN_SUCCESS = "USER_LOG_IN_SUCCESS";
export class UserLogInSuccess implements Action {
  type: string = USER_LOG_IN_SUCCESS;
  constructor(public user: User, public token: MyToken) {}
}

export const USER_LOG_IN_AS_GUEST = "USER_LOG_IN_AS_GUEST";
export class UserLogInAsGuest implements Action {
  type: string = USER_LOG_IN_AS_GUEST;
  constructor(public user: User) {}
}

export const BEE_HIVE_ACTIONS_CHANGE = "BEE_HIVE_ACTIONS_CHANGE";
export class BeeHiveActionsChange implements Action {
  type: string = BEE_HIVE_ACTIONS_CHANGE;
  constructor(public beeHiveActionsState: BeeHiveActionsState) {}
}
