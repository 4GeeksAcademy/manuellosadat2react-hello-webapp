import ContactCard from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container mt-4">
      {store.contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
