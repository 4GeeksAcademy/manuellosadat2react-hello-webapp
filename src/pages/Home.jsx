import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Home = () => {
  const { store, actions } = useGlobalReducer();

  useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <div>
      {store.contacts?.map(contact => (
        <div key={contact.id}>{contact.name}</div>
      ))}
    </div>
  );
};


