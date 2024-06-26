import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contacts = () => {
  const { store, actions } = useContext(Context);
  let contactID = 0;

  useEffect(() => {
    actions.setEditing(false);
  }, []);

  return (
    <div className="container">
      <div className="my-4 d-flex justify-content-end">
        <Link to="/form">
          <button className="btn btn-success"> Add new contact </button>
        </Link>
      </div>
      <ul className="list-group row">
        {store.contacts.map((contact, index) => (
          <li key={index} className="list-group-item d-flex contact col-12">
            <img
              src="https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-ilustracion-vectorial_268834-538.jpg?w=740"
              alt="Profile"
              className="img-profile rounded-circle "
              style={{ width: "100px", height: "100px" }}
            />
            <div className="d-flex flex-column justify-content-center ms-3 ms-xl-5">
              <div className="fw-bold mb-1">{contact.name}</div>
              <div>
                <i className="fa fa-phone fa-fw text-muted mr-3"></i>
                {contact.phone}
              </div>
              <div>
                <i className="fa fa-envelope fa-fw text-muted mr-3"></i>
                {contact.email}
              </div>
              <div>
                <i className="fas fa-map-marker-alt text-muted mr-3"></i>
                {contact.address}
              </div>
            </div>
            <div className="ms-auto">
              <Link to="/form">
                <i
                  className="fas fa-pencil-alt me-4"
                  onClick={() => actions.modifyContacts(contact.id)}
                ></i>
              </Link>
              <i
                className="fas fa-trash-alt btn"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onClick={() => (contactID = contact.id)}
              ></i>
            </div>
          </li>
        ))}
        ;
      </ul>
      <div
        className="modal"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deteleModalLabel">
                Seguro que quieres eliminar este contacto?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
                onClick={() => actions.deleteContact(contactID)}
              >
                aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
