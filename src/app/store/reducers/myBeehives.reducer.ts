import { GET_MY_BEEHIVES, BeehiveSelect, GetMyBeehives } from "../actions";
import { BeeHives } from "src/app/models/beeHives";
import { Action } from "@ngrx/store";

export default function(state: BeeHives[] = [], action: Action) {
  switch (action.type) {
    case GET_MY_BEEHIVES: {
      console.log(action.type);
      const beehives = (action as GetMyBeehives).Beehives;

      return [...(state = beehives)];
    }
    default: {
      return state;
    }
  }
}
