import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const AddContact = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="container mt-5">
    {/* text-center para centrar el H1 */}
    <h1 className="text-center mb-4">Add Contact</h1>

    <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
      
      {/* Grupo: Full Name */}
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          name="name"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter full name"
        />
      </div>

      {/* Grupo: Email */}
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      {/* Grupo: Phone */}
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          name="phone"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter phone"
        />
      </div>

      {/* Grupo: Address */}
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          name="address"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter address"
        />
      </div>

      {/* Botón Full Width (w-100) para que se vea más moderno */}
      <button className="btn btn-primary w-100">Save</button>
    </form>

    <div className="text-center mt-3">
      <Link to="/">or get back to contacts</Link>
    </div>
  </div>
);
};
