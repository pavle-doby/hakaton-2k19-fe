import { BeeHiveActionsState } from "src/app/models/beeHiveActionsState";
import { Action } from "@ngrx/store";
import { BEE_HIVE_ACTIONS_CHANGE, BeeHiveActionsChange } from "../actions";

export default function(
  state: BeeHiveActionsState = new BeeHiveActionsState(),
  action: Action
) {
  switch (action.type) {
    case BEE_HIVE_ACTIONS_CHANGE: {
      const newState = (action as BeeHiveActionsChange).beeHiveActionsState;

      return { ...(state = newState) };
    }
    default: {
      return state;
    }
  }
}
