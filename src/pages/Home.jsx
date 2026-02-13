import { useContext } from "react";
import { Context } from "../hooks/useGlobalReducer";
import ContactCard from "../components/ContactCard";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="container mt-4">
      {store.todos.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
