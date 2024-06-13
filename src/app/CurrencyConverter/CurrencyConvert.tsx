import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
export default function CurrencyConvert() {
  const currencyConvertStyle = {
    header: {
      textAlign: "center",
      borderBottom: "1px solid rgb(15 23 42 / .1)",
      textTransform: "uppercase",
    },
    cardLayout: {
      border: "1px solid rgb(0 0 0 / 12%)",
      backgroundColor: "rgb(0 0 0 / 4%)",
      height: "22rem",
      marginTop: "2rem",
    },
    firstLayout: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-around",
      columnGap: "2rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    submit: {
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "flex-start",
      height: "20px",
      alignItems: "center",
      rowGap: "2rem",
    },
  };

  const options = ["USD", "EUR", "CAD", "INR"];

  const CurrencyInfo = {
    amount: 0,
    fromCur: "EUR",
    toCur: "USD",
    convert: "",
  };

  const [currentConvert, setCurrencyConvert] = useState(CurrencyInfo);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCurrencyConvert((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { amount, fromCur, toCur, convert } = currentConvert;

  const BaseURL = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`;

  useEffect(() => {
    (async () => {
      try {
        const getFetch = await fetch(`${BaseURL}`);
        const response = await getFetch.json();
        console.log(response.rates[toCur]);
        setCurrencyConvert((prev) => {
          return { ...prev, convert: response.rates[toCur] };
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [BaseURL, currentConvert, toCur]);
  return (
    <div>
      <div style={currencyConvertStyle.header as React.CSSProperties}>
        <h1>Currency Converter</h1>
      </div>
      <div>
        <Grid container xs={12}>
          <Grid xs={4}></Grid>
          <Grid xs={4} sx={currencyConvertStyle.cardLayout}>
            <div style={currencyConvertStyle.firstLayout}>
              <div>
                <h3>Amount</h3>
              </div>
              <div>
                <TextField
                  value={currentConvert.amount}
                  name="amount"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div style={currencyConvertStyle.firstLayout}>
              <div>
                {" "}
                <h3>From</h3>
              </div>
              <div>
                <Select
                  value={currentConvert.fromCur}
                  name="fromCur"
                  onChange={handleChange}
                >
                  {options.map((el) => {
                    return (
                      <MenuItem key={el} value={el}>
                        {el}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            </div>
            <div style={currencyConvertStyle.firstLayout}>
              <div>
                {" "}
                <h3>To</h3>
              </div>
              <div>
                <Select
                  value={currentConvert.toCur}
                  name="toCur"
                  onChange={handleChange}
                >
                  {options.map((el) => {
                    return (
                      <MenuItem key={el} value={el}>
                        {el}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            </div>
            <div style={currencyConvertStyle.submit}>
              <div>
                {convert}-{convert != "" && toCur}
              </div>
            </div>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </div>
    </div>
  );
}
