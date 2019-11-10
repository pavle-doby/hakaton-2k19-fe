import { UserAuth } from "../models/userAuth";
import { ActionReducerMap } from "@ngrx/store";
import userReducer from "./reducers/user.reducer";
import { User } from "../models/user";
import { MyToken } from "../models/token";
import tokenReducer from "./reducers/token.reducer";
import beeHiveActionsReducer from "./reducers/beeHiveActions.reducer";
import { BeeHiveActionsState } from "../models/beeHiveActionsState";

export interface State {
  user: User;
  token: MyToken;
  beeHiveActionState: BeeHiveActionsState;
}

export const rootReducer: ActionReducerMap<any> = {
  user: userReducer,
  token: tokenReducer,
  beeHiveActionState: beeHiveActionsReducer
};
