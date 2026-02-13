import { Link } from "react-router-dom";
import { useState } from "react";

export const AddContact = () => {
  const [form, setForm] = useState({
    full_name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); 
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add a new contact</h1>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        {/* Save */}
        <button type="submit" className="btn btn-primary w-100">
          save
        </button>
      </form>

      <div className="mt-3">
        <Link to="/">or get back to contacts</Link>
      </div>
    </div>
  );
};
