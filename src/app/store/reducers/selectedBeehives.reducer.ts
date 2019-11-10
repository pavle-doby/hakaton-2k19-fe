import { BeeHives } from "src/app/models/beeHives";
import { Action } from "@ngrx/store";
import { BEEHIVE_SELECT, BeehiveSelect } from "../actions";

export default function(state: BeeHives = null, action: Action) {
  switch (action.type) {
    case BEEHIVE_SELECT: {
      const beehive = (action as BeehiveSelect).Beehive;

      return { ...(state = beehive) };
    }
    default: {
      return state;
    }
  }
}
