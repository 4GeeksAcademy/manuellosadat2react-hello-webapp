import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  const API = "https://playground.4geeks.com/contact";
  const AGENDA = "eduardo_tovar";

  const actions = {
    createAgenda: async () => {
      try {
        await fetch(`${API}/agendas/${AGENDA}`, {
          method: "POST"
        });
      } catch (error) {
        console.log(error);
      }
    },

    getContacts: async () => {
      try {
        await actions.createAgenda();

        const resp = await fetch(`${API}/agendas/${AGENDA}/contacts`);
        const data = await resp.json();

        dispatch({
          type: "set_contacts",
          payload: data.contacts
        });

      } catch (error) {
        console.log(error);
      }
    },

    deleteContact: async (id) => {
      try {
        await fetch(`${API}/agendas/${AGENDA}/contacts/${id}`, {
          method: "DELETE"
        });

        actions.getContacts();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <StoreContext.Provider value={{ store, actions }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  return useContext(StoreContext);
}
