import { Pencil, Trash } from "react-bootstrap-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const ContactCard = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useGlobalReducer();

  const handleDelete = async () => {
    try {
      // 🔥 BORRAR EN LA API
      await fetch(
        `https://playground.4geeks.com/contact/agendas/eduardo/contacts/${contact.id}`,
        {
          method: "DELETE",
        }
      );

      // 🔥 BORRAR EN EL STORE
      dispatch({
        type: "delete_contact",
        payload: contact.id,
      });

    } catch (error) {
      console.error("Error deleting contact:", error);
    }

    setShowModal(false);
  };

  return (
    <>
      <div className="card mb-3 shadow-sm">
        <div className="card-body d-flex align-items-center">

          <img
            src={contact.avatar || "https://i.pravatar.cc/150"}
            alt={contact.name}
            className="rounded-circle me-3"
            width="64"
            height="64"
          />

          <div className="flex-grow-1">
            <h5 className="mb-1">{contact.name}</h5>
            <div className="text-muted small">
              <div>📍 {contact.address}</div>
              <div>📞 {contact.phone}</div>
              <div>✉️ {contact.email}</div>
            </div>
          </div>

          <div className="ms-3 d-flex gap-2">
            <Link to="/add">
              <button className="btn btn-outline-secondary btn-sm">
                <Pencil />
              </button>
            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="btn btn-outline-danger btn-sm"
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5>Are you sure?</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-success"
                  onClick={handleDelete}
                >
                  Yes baby!
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default ContactCard;
