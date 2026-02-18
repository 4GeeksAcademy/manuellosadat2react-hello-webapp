import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactCard from "../components/ContactCard";

export const Home = () => {
  const { store, actions } = useGlobalReducer();

  useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <div className="container mt-4">
      {store.contacts?.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};



