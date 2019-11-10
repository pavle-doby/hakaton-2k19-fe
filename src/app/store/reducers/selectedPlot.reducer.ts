import { IPlots } from "src/app/models/plots";
import { Action } from "@ngrx/store";
import { PLOT_SELECT, PlotSelect } from "../actions";

export default function(state: IPlots = null, action: Action) {
  switch (action.type) {
    case PLOT_SELECT: {
      const plot = (action as PlotSelect).plot;

      return { ...(state = plot) };
    }
    default: {
      return state;
    }
  }
}
