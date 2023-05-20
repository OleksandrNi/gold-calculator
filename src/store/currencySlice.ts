import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Currency {
  name: string;
  rate: number;
}

interface CurrenciesState {
  currencies: Record<string, Currency>;
  selectedCurrency: Currency;
}

const initialState: CurrenciesState = {
  currencies: {
    usd: {
      name: "USD",
      rate: 1,
    },
    eur: {
      name: "EUR",
      rate: 1.05,
    },
    gbr: {
      name: "GBR",
      rate: 1.4,
    },
    aud: {
      name: "AUD",
      rate: 0.9,
    },
    cad: {
      name: "CAD",
      rate: 0.5
    },
  },
  selectedCurrency: {
    name: "USD",
    rate: 1,
  },
};

const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    selectCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrency = state.currencies[action.payload];
    },
  },
});

export const { selectCurrency } = currencySlice.actions;
export default currencySlice.reducer;
