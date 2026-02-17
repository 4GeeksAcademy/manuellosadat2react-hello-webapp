import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const { actions } = useGlobalReducer();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      "https://playground.4geeks.com/contact/agendas/eduardo_tovar/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    actions.getContacts();
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} />
        <input name="email" onChange={handleChange} />
        <input name="phone" onChange={handleChange} />
        <input name="address" onChange={handleChange} />
        <button>Save</button>
      </form>
      <Link to="/">Back</Link>
    </div>
  );
};
