import { Pencil, Trash } from "react-bootstrap-icons";

const ContactCard = ({ contact }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex align-items-center">
        
        {/* Avatar */}
        <img
          src={contact.avatar}
          alt={contact.name}
          className="rounded-circle me-3"
          width="64"
          height="64"
        />

        {/* Info */}
        <div className="flex-grow-1">
          <h5 className="mb-1">{contact.name}</h5>

          <div className="text-muted small">
            <div>📍 {contact.address}</div>
            <div>📞 {contact.phone}</div>
            <div>✉️ {contact.email}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="ms-3 d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">
            <Pencil />
          </button>
          <button className="btn btn-outline-danger btn-sm">
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
