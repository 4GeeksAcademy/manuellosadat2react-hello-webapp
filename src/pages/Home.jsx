import { useEffect } from "react";
import ContactCard from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const getContacts = async () => {
    try {
      const resp = await fetch(
        "https://playground.4geeks.com/contact/agendas/eduardo"
      );
      const data = await resp.json();

      dispatch({
        type: "set_contacts",
        payload: data.contacts
      });

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container mt-4">
      {store.contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};


