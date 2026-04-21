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
    const tempErrors = { name: "", email: "", msg: "" };

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

    if (!validateFields(name, email, msg)) return;

    setIsSubmitting(true);

    await setDoc(doc(firestore, "Users", email), {
      name: name,
      email_id: email,
      message: msg,
    })
      .then(() => {
        setIsSubmitting(false);
        alert(
          `Hey ${name},\nYour response was recorded successfully. I will get back to you :)`
        );
      })
      .catch(() => {
        setIsSubmitting(false);
        alert(
          "Oops..some error occurred while submitting your response. Please try again :( ."
        );
      });
  };

  const fieldClass = `block w-full rounded-xl border border-solid px-4 py-3.5 text-base transition focus:outline-none focus:ring-2 focus:ring-indigo-500/30 ${
    darkMode
      ? "border-slate-500/80 bg-slate-950/60 text-slate-100 placeholder:text-slate-500 focus:border-indigo-400"
      : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500"
  }`;

  return (
    <section
      id="contact"
      className="mt-12 w-full scroll-mt-28 px-0 sm:mt-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div
          className={`overflow-hidden rounded-[1.75rem] border shadow-2xl ${
            darkMode
              ? "border-slate-600/50 bg-slate-900/70 backdrop-blur-xl"
              : "border-slate-200/90 bg-white/95 backdrop-blur-xl"
          } `}
        >
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div
              className={`flex flex-col justify-center px-6 py-10 sm:px-10 lg:py-14 ${
                darkMode
                  ? "border-slate-700/80 bg-gradient-to-br from-indigo-950/80 to-slate-900/90 lg:border-r"
                  : "border-slate-200/80 bg-gradient-to-br from-indigo-50 to-white lg:border-r"
              } `}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
                Let&apos;s talk
              </p>
              <h2 className="mt-3 font-poppins_medium text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
                Contact / Enquire
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Questions about mobile, IoT, or collaboration—drop a message.
                I usually reply within a couple of days.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Work inquiries &amp; project ideas
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Speaking or mentorship (time permitting)
                </li>
              </ul>
            </div>

            <div className="px-6 py-10 sm:px-10 lg:py-14">
              <div className="mb-6">
                <label
                  htmlFor="nameInput"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  className={fieldClass}
                  id="nameInput"
                  placeholder="Your name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="emailInput"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  className={fieldClass}
                  id="emailInput"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="mb-8">
                <label
                  htmlFor="messageInput"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  className={`${fieldClass} min-h-[140px] resize-y`}
                  id="messageInput"
                  rows={5}
                  placeholder="How can I help?"
                />
                {errors.msg && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.msg}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:opacity-95 disabled:opacity-60 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500"
                onClick={() => sendData()}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex justify-center">
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
                  </span>
                ) : (
                  "Send message"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
