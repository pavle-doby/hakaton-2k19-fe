import { UserAuth } from "../models/userAuth";
import { ActionReducerMap } from "@ngrx/store";
import userReducer from "./reducers/user.reducer";
import { User } from "../models/user";
import { MyToken } from "../models/token";
import tokenReducer from "./reducers/token.reducer";

export interface State {
  user: User;
  token: MyToken;
}

export const rootReducer: ActionReducerMap<any> = {
  user: userReducer,
  token: tokenReducer
};
