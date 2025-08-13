import {
  ADD_TRAIT,
  REMOVE_TRAIT,
  UPDATE_TRAIT,
} from "../constants/actionTypes";

const initialState = [];
const traitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRAIT:
      const newTrait = {};
      newTrait.trait = "";
      newTrait.id = state.length;
      for (let x = 0; x < state.length; x++) {
        if (state.find((node) => node.id === x) === undefined) {
          newTrait.id = x;
        }
      }
      return [...state, newTrait];

    case UPDATE_TRAIT: {
      const event = action.payload;
      // tenta pegar id pelo path, se não existir usa closest
      const idEl =
        event.nativeEvent.path?.[1]?.id || event.target.closest(".trait")?.id;
      const id = parseInt(idEl);

      const traitInState = state.find((trait) => trait.id === id);
      const traitIndex = state.indexOf(traitInState);

      const traitInStateObject = { ...traitInState, trait: event.target.value };

      return state.map((item, index) =>
        index === traitIndex ? traitInStateObject : item
      );
    }

    case REMOVE_TRAIT: {
      const event = action.payload;
      const idEl =
        event.nativeEvent.path?.[1]?.id || event.target.closest(".trait")?.id;
      const id = parseInt(idEl);

      return state.filter((trait) => trait.id !== id);
    }
    default:
      return state;
  }
};

export default traitsReducer;
