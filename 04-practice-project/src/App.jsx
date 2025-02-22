import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_INVESTMENT_DATA = {
  initialInvestment: 100000,
  annualInvestment: 1000,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [investmentData, setInvestmentData] = useState(INITIAL_INVESTMENT_DATA);

  function handleDataChange(updatedData) {
    setInvestmentData(updatedData);
  }

  const investmentResult = calculateInvestmentResults(investmentData);

  return (
    <>
      <UserInput
        initialInvestmentData={investmentData}
        onChangeData={handleDataChange}
      />
      <Result result={investmentResult} />
    </>
  );
}

export default App;
