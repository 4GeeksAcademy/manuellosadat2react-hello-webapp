// Estado inicial global
export const initialStore = () => {
  return {
    contacts: []
  };
};

// Reducer global
export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "set_contacts":
      return {
        ...store,
        contacts: action.payload
      };

    default:
      return store;
  }
}
