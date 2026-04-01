import { useState } from "react";
import "./ApplicationForm.css";

export default function ApplicationForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="application-form">
      {/* Progress Bar */}
      <div className="progress-bar">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`progress-step ${step >= s ? "active" : ""}`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div>
        {step === 1 && (
          <div>
            <h2 className="form-section-title">Basic Information</h2>
            <div className="form-content">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="date" placeholder="Date of Birth" />
              <input type="text" placeholder="Marital Status" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
              <select>
                <option value="">Select Citizenship</option>
                <option value="Nigeria">Nigeria</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="ZIP/Postal Code" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="form-section-title">Driving History</h2>
            <div className="form-content">
              <input type="text" placeholder="License Number" />
              <input type="text" placeholder="Years of Experience" />
              <input type="text" placeholder="Accidents (if any)" />
              <input type="text" placeholder="Traffic Violations" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="form-section-title">Employment History</h2>
            <div className="form-content">
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Position" />
              <input type="text" placeholder="Years Worked" />
              <input type="text" placeholder="Reason for Leaving" />
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="form-section-title">Emergency Information</h2>
            <div className="form-content">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Relationship" />
              <input type="tel" placeholder="Phone Number" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Postal Code" />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="form-navigation">
        {step > 1 && (
          <button className="nav-btn prev" onClick={prevStep}>
            Back
          </button>
        )}
        {step < 4 ? (
          <button className="nav-btn next" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button className="nav-btn submit">Submit</button>
        )}
      </div>
    </div>
  );
}
