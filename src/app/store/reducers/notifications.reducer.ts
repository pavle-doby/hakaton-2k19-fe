import { Action } from "@ngrx/store";
import { GET_MY_NOTIFI, GetMyNotifi } from "../actions";

export default function(state: any[] = [], action: Action) {
  switch (action.type) {
    case GET_MY_NOTIFI: {
      const notifi = (action as GetMyNotifi).notifi;

      return [...(state = notifi)];
    }
    default: {
      return state;
    }
  }
}
