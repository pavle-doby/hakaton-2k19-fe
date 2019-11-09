import { UserAuth } from "../models/userAuth";
import { ActionReducerMap } from "@ngrx/store";
import userReducer from "./reducers/user.reducer";
import { UserRegister } from "../models/userRegister";

export interface State {
  user: UserRegister;
}

export const rootReducer: ActionReducerMap<any> = {
  user: userReducer
};
