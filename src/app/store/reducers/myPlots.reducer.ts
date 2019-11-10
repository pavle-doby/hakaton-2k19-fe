import { IPlots } from "src/app/models/plots";
import { Action } from "@ngrx/store";
import { GET_MY_PLOTS, GetMyPlots } from "../actions";

export default function(state: IPlots[] = [], action: Action) {
  switch (action.type) {
    case GET_MY_PLOTS: {
      const plots = (action as GetMyPlots).plots;

      return [...(state = plots)];
    }
    default: {
      return state;
    }
  }
}
