import { produce } from "immer";
import actionTypes from "../actions/actionTypes";
import { LANGUAGE, CURRENCY } from "../../../utils/constant";
const initialState = {
  language: LANGUAGE.EN,
  currency: CURRENCY.USD,
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.CHANGE_LANGUAGE) {
      draft.language = payload;
    } else if (type === actionTypes.CHANGE_CURRENCY) {
      draft.currency = payload;
    }
    return draft;
  });
};

export default reducer;
