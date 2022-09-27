import React from "react";
import { useState } from "react";
import Space from "../Space/Space";
import { toast } from "react-toastify";
import { dataBase } from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";

const ContactFormContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const notifyEmpty = () =>
    toast.error("Debes completar todos los campos para continuar.", {
      theme: "dark",
    });

  const notifySuccess = () =>
    toast.success(
      "Se ha enviado su consulta, a la brevedad nos pondremos en contacto",
      {
        theme: "dark",
      }
    );

  const validate =
    name === "" || phone === "" || email === "" || message === "";

  const validateForm = (event) => {
    event.preventDefault();
    if (!validate) {
      handleSubmit();
    } else notifyEmpty();
  };

  const handleSubmit = () => {
    const contact = {
      client: {
        name: name,
        phone: phone,
        email: email,
        message: message,
      },
      date: serverTimestamp(),
    };

    const contactCollection = collection(dataBase, "contact");

    addDoc(contactCollection, contact).then((res) => {
      notifySuccess();
      clearForm();
    });
  };

  const clearForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <Space />
      <ContactForm
        name={name}
        email={email}
        phone={phone}
        message={message}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangePhone={handleChangePhone}
        handleChangeMessage={handleChangeMessage}
        validateForm={validateForm}
      />
      <ContactInfo />
    </>
  );
};

export default ContactFormContainer;
