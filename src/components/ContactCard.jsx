import { Pencil, Trash } from "react-bootstrap-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    console.log("Deleting:", contact.name);
    setShowModal(false);
  };

  return (
    <>
      {/* CARD */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body d-flex align-items-center">
          
          <img
            src={contact.avatar}
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

      {/* MODAL */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" mb-5>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Are you sure?</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p>
                  If you delete this contact, the entire universe will go down! 
                </p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Oh no!
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

      {/* BACKDROP */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default ContactCard;
