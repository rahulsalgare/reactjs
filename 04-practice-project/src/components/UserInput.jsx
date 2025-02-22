import { useState } from "react";

export default function UserInput({ initialInvestmentData, onChangeData }) {
  function handleChange(inputIdentifier, newValue) {
    const updatedData = {
      ...initialInvestmentData,
      [inputIdentifier]: +newValue,
    };

    onChangeData(updatedData);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="text"
            value={initialInvestmentData.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="text"
            value={initialInvestmentData.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="text"
            value={initialInvestmentData.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="text"
            value={initialInvestmentData.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}
