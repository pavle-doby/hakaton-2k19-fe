import { UserAuth } from "../models/userAuth";
import { ActionReducerMap } from "@ngrx/store";
import userReducer from "./reducers/user.reducer";
import { User } from "../models/user";
import { MyToken } from "../models/token";
import tokenReducer from "./reducers/token.reducer";
import beeHiveActionsReducer from "./reducers/beeHiveActions.reducer";
import { BeeHiveActionsState } from "../models/beeHiveActionsState";
import { BeeHives } from "../models/beeHives";
import { IPlots } from "../models/plots";
import myBeehivesReducer from "./reducers/myBeehives.reducer";
import selectedBeehivesReducer from "./reducers/selectedBeehives.reducer";
import myPlotsReducer from "./reducers/myPlots.reducer";
import selectedPlotReducer from "./reducers/selectedPlot.reducer";

export interface State {
  user: User;
  token: MyToken;
  beeHiveActionState: BeeHiveActionsState;
  myBeehives: BeeHives[];
  selecetedBeehives: BeeHives;
  myPlots: IPlots[];
  selectedPlot: IPlots;
}

export const rootReducer: ActionReducerMap<any> = {
  user: userReducer,
  token: tokenReducer,
  beeHiveActionState: beeHiveActionsReducer,
  myBeehives: myBeehivesReducer,
  selecetedBeehives: selectedBeehivesReducer,
  myPlots: myPlotsReducer,
  selectedPlot: selectedPlotReducer
};
