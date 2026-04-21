import React, { useState, useContext } from "react";
import { firestore } from "./Backend";
import { setDoc, doc } from "firebase/firestore";
import AppContext from "../state/AppContext";

const Contact = function () {
  const { darkMode } = useContext(AppContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", msg: "" });

  const validateFields = (name, email, msg) => {
    let valid = true;
    let tempErrors = { name: "", email: "", msg: "" };

    if (!name) {
      tempErrors.name = "Name is required";
      valid = false;
    }
    if (!email) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      tempErrors.email = "Enter a valid email";
      valid = false;
    }
    if (!msg) {
      tempErrors.msg = "Message is required";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const obtainInformation = function () {
    const nameVal = document.getElementById("nameInput").value;
    const emailVal = document.getElementById("emailInput").value;
    const msgVal = document.getElementById("messageInput").value;
    return {
      name: nameVal,
      email: emailVal,
      msg: msgVal,
    };
  };

  const sendData = async function () {
    const { name, email, msg } = obtainInformation();

    // Validate before submitting
    if (!validateFields(name, email, msg)) return;

    setIsSubmitting(true); // Start the submission process

    await setDoc(doc(firestore, "Users", email), {
      name: name,
      email_id: email,
      message: msg,
    })
      .then(() => {
        setIsSubmitting(false); // Stop the loader
        alert(
          `Hey ${name},\nYour response was recorded successfully. I will get back to you :)`
        );
      })
      .catch((e) => {
        setIsSubmitting(false); // Stop the loader
        alert(
          "Oops..some error occurred while submitting your response. Please try again :( ."
        );
      });
  };

  return (
    <section
      id="contact"
      className="mt-10 min-h-[70vh] scroll-mt-28"
    >
      <div
        className={`mx-auto mt-4 max-w-[760px] rounded-[1.75rem] border px-5 py-10 shadow-2xl lg:px-10 ${
          darkMode
            ? "border-slate-600/40 bg-slate-900/75 text-slate-100 backdrop-blur-xl"
            : "border-slate-200/90 bg-white/90 text-slate-900 backdrop-blur-xl"
        } `}
      >
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Let&apos;s talk
        </p>
        <h2 className="mb-8 font-poppins_medium text-3xl font-bold text-slate-900 dark:text-white">
          Contact / Enquire
        </h2>

        <div className="form-group mb-6">
          <input
            type="text"
            className={`form-control m-0 block w-full rounded-xl border border-solid ${
              darkMode
                ? "border-slate-600 bg-slate-950/50 text-slate-100 placeholder:text-slate-500"
                : "border-slate-300 bg-white text-slate-800"
            } px-4 py-3 text-base transition ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/25`}
            id="nameInput"
            placeholder="Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="form-group mb-6">
          <input
            type="email"
            className={`form-control m-0 block w-full rounded-xl border border-solid ${
              darkMode
                ? "border-slate-600 bg-slate-950/50 text-slate-100 placeholder:text-slate-500"
                : "border-slate-300 bg-white text-slate-800"
            } px-4 py-3 text-base transition ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/25`}
            id="emailInput"
            placeholder="Email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="form-group mb-6">
          <textarea
            className={`form-control m-0 block w-full rounded-xl border border-solid ${
              darkMode
                ? "border-slate-600 bg-slate-950/50 text-slate-100 placeholder:text-slate-500"
                : "border-slate-300 bg-white text-slate-800"
            } px-4 py-3 text-base transition ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/25`}
            id="messageInput"
            rows="3"
            placeholder="Message"
          ></textarea>
          {errors.msg && (
            <p className="mt-1 text-sm text-red-500">{errors.msg}</p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition duration-150 ease-in-out ${
            darkMode
              ? "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500"
              : "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500"
          }`}
          onClick={() => sendData()}
          disabled={isSubmitting} // Disable button when submitting
        >
          {isSubmitting ? (
            <div className="flex justify-center">
              <svg
                className="h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 0116 0"
                />
              </svg>
            </div>
          ) : (
            "Send"
          )}
        </button>
      </div>
    </section>
  );
};

export default Contact;
