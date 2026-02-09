import ContactCard from "../components/ContactCard";

const contact = {
  name: "Mike Anamendolla",
  address: "5842 Hillcrest Rd",
  phone: "(870) 288-4149",
  email: "mike.ana@example.com",
  avatar: "https://i.pravatar.cc/150?img=3"
};

export const Home = () => {
  return (
    <div className="container mt-4">
      <ContactCard contact={contact} />
      <ContactCard contact={contact} />
      <ContactCard contact={contact} />
    </div>
  );
};
