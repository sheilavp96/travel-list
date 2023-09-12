import React, { useState } from "react";
import "./index.css";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];
export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <p className={step === 1 ? "active" : ""}>1</p>
            <p className={step === 2 ? "active" : ""}>2</p>
            <p className={step === 3 ? "active" : ""}>3</p>
          </div>
          <div className="message">
            Step: {step} {messages[step - 1]}
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => setStep((s) => s + 1)}
              disabled={step === 3}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
