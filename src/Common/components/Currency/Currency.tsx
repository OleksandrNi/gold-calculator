import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectCurrency } from "../../../store/currencySlice";
import { useAppSelector } from "../../../hook";

import { ReactComponent as AUD } from "./images/Aud.svg";
import { ReactComponent as CAD } from "./images/Cad.svg";
import { ReactComponent as EUR } from "./images/Eur.svg";
import { ReactComponent as GBR } from "./images/Gbr.svg";
import { ReactComponent as USD } from "./images/Usd.svg";
import { ReactComponent as ArrowUp } from "./images/Arrow_Up.svg";
import { ReactComponent as ArrowDown } from "./images/Arrow_Down.svg";

import styles from "./styles.module.scss";

interface Currency {
  name: string;
  rate: number;
}

const currencyComponents: {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} = {
  USD,
  GBR,
  EUR,
  CAD,
  AUD,
};

export default function CommonCurrency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const currencies = useAppSelector((state) => state.currencies.currencies);
  const selectedCurrency = useAppSelector(
    (state) => state.currencies.selectedCurrency
  );

  const IconComponent = currencyComponents[selectedCurrency.name];

  const currencyList = Object.keys(currencies).map((currencyKey: string) => {
    const currency: Currency = currencies[currencyKey];
    const LogoComponent = currencyComponents[currency.name];

    return (
      <div
        key={currencyKey}
        className={styles.currency_list}
        onClick={() => {
          dispatch(selectCurrency(currencyKey));
          setIsMenuOpen(false);
        }}
      >
        <LogoComponent />
        <span>{currency.name}</span>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.input}
        style={isMenuOpen ? { borderBottom: "none" } : undefined}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={styles.currency}>
          {<IconComponent />}
          {selectedCurrency.name}
        </div>
        {isMenuOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      {isMenuOpen && <div className={styles.list}>{currencyList}</div>}
    </div>
  );
}
