import { Pencil, Trash } from "react-bootstrap-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const ContactCard = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useGlobalReducer();

  const handleDelete = async () => {
    try {
      await fetch(
        `https://playground.4geeks.com/contact/${contact.id}`,
        {
          method: "DELETE"
        }
      );

      dispatch({
        type: "delete_contact",
        payload: contact.id
      });

      setShowModal(false);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card mb-3 shadow-sm">
        <div className="card-body d-flex align-items-center">
          <img
            src="https://i.pravatar.cc/150"
            alt={contact.name}
            className="rounded-circle me-3"
            width="64"
          />

          <div className="flex-grow-1">
            <h5>{contact.name}</h5>
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
        <>
          <div className="modal fade show d-block">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5>Are you sure?</h5>
                </div>

                <p className="m-2">If you delete this thing the entire universe will go down!</p>

                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-secondary"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>

              </div>
            </div>
          </div>

          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
};

export default ContactCard;
