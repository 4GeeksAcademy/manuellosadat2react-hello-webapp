import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { store } = useGlobalReducer();

  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    if (isEditing) {
      const contact = store.contacts.find(c => c.id === parseInt(id));
      if (contact) {
        setForm(contact);
      }
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        // 🔥 EDITAR CONTACTO
        await fetch(
          `https://playground.4geeks.com/contact/agendas/eduardo/contacts/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
          }
        );
      } else {
        // 🔥 CREAR CONTACTO
        await fetch(
          "https://playground.4geeks.com/contact/agendas/eduardo/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
          }
        );
      }

      navigate("/");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        {isEditing ? "Edit Contact" : "Add Contact"}
      </h1>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter full name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter phone"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter address"
          />
        </div>

        <button className="btn btn-primary w-100">
          {isEditing ? "Update" : "Save"}
        </button>
      </form>

      <div className="text-center mt-3">
        <Link to="/">or get back to contacts</Link>
      </div>
    </div>
  );
};