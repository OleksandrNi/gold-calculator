import { useState } from "react";
import { useAppSelector } from "../../hook";
import { TextField } from "@mui/material";

import styles from "./styles.module.scss";

export default function CommonCalculator() {
  const selectedCurrency = useAppSelector(
    (state) => state.currencies.selectedCurrency
  );
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value.replace(/[^0-9.]/g, "")); // Преобразование строки в число
    setAmount(value);
  };

  const calculatedAmount = (amount * selectedCurrency.rate).toFixed(2);

  return (
    <div className={styles.container}>
      <TextField
        id="amount"
        label="Amount"
        variant="outlined"
        value={amount}
        onChange={handleAmountChange}
      />
      <TextField
        id="price"
        label="Price"
        variant="outlined"
        value={`${selectedCurrency.name}: ${calculatedAmount}`}
        disabled
      />
    </div>
  );
}
