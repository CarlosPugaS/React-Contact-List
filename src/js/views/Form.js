import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Form = () => {
  const { store, actions } = useContext(Context);
  const [fullName, setFullName] = useState(store.userToModify?.name || "");
  const [email, setEmail] = useState(store.userToModify?.email || "");
  const [phone, setPhone] = useState(store.userToModify?.phone || "");
  const [address, setAddress] = useState(store.userToModify?.address || "");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(store.userToModify);
  }, []);

  const addContacts = (e) => {
    e.preventDefault();
    if (
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      address.trim() !== ""
    ) {
      actions.createContact(fullName, phone, email, address);
      setFullName("");
      setEmail("");
      setPhone("");
      setAddress("");
      navigate("/");
    }
  };

  const modifyContacts = (e) => {
    e.preventDefault();
    if (
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      address.trim() !== ""
    ) {
      actions.modifyContactAPI(
        fullName,
        phone,
        email,
        address,
        store.userToModify.id
      );
      actions.setEditing(false);
      navigate("/");
    }
  };

  return (
    <div className="container p-3">
      <h2 className="text-center"> Agregar un nuevo contacto </h2>
      <form className="row g-3">
        <div className="col-md-12">
          <label htmlFor="inputName" className="form-label">
            Nombre Completo
          </label>
          <br></br>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            className="Htmlform-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="exampleInputEmail2" className="Htmlform-label">
            Correo
          </label>
          <br></br>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="Htmlform-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail3" className="Htmlform-label">
            Telefono
          </label>
          <br></br>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="Htmlform-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail4" className="Htmlform-label">
            Dirección
          </label>
          <br></br>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="Htmlform-control"
            id="exampleInputEmail4"
            aria-describedby="emailHelp"
          />
        </div>
        {store.editing ? (
          <button
            onClick={modifyContacts}
            type="submit"
            className="btn btn-secondary"
          >
            Save Modifications
          </button>
        ) : (
          <button
            onClick={addContacts}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
        )}
        <div className="mt-3 mb-5">
          <Link to="/"> Or get back to contacts </Link>
        </div>
      </form>
    </div>
  );
};
