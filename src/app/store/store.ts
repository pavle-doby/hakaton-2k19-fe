import { UserAuth } from "../models/userAuth";
import { ActionReducerMap } from "@ngrx/store";
import userReducer from "./reducers/user.reducer";
import { User } from "../models/user";

export interface State {
  user: User;
}

export const rootReducer: ActionReducerMap<any> = {
  user: userReducer
};
