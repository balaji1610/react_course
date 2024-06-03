import { AccordionType } from "@/app/Interface/AccordionType";
import { Grid } from "@mui/material";
import { useState } from "react";
interface AccordionListPropsType {
  list: AccordionType[];
}

export default function AccordionList({ list }: AccordionListPropsType) {
  const [open, setOpen] = useState(-1);
  const toggleClick = (para: number) => {
    setOpen(para);
  };
  const minustoggleClick = () => {
    setOpen(-1);
  };
  const accordionStyle = {
    openCardLayout: {
      display: "grid",
      gridTemplateColumns: "5rem 32rem auto",
    },
    textLayout: {
      padding: "5px 20px 5px 20px",
    },
    toogle: {
      cursor: "pointer",
    },
  };

  return (
    <div>
      <Grid container xs={12}>
        <Grid xs={3}></Grid>
        <Grid xs={6}>
          {list.map((el, index) => {
            const { id, title, text } = el;
            let isOpen = id == open;
            return (
              <div
                key={index}
                style={{
                  border: "2px solid rgb(15 23 42 / .1)",
                  height: isOpen ? "10rem" : "6rem",
                  borderTop: isOpen
                    ? "3px solid #2563eb"
                    : "2px solid rgb(15 23 42 / .1)",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <div style={accordionStyle.openCardLayout}>
                  <div>
                    <h1>{id <= 9 ? `0${id}` : id}</h1>
                  </div>
                  <div>
                    <h1>{title} </h1>
                  </div>
                  {!isOpen ? (
                    <div
                      style={accordionStyle.toogle}
                      onClick={() => toggleClick(id)}
                    >
                      <h1>+</h1>
                    </div>
                  ) : (
                    <div
                      style={accordionStyle.toogle}
                      onClick={minustoggleClick}
                    >
                      <h1>-</h1>
                    </div>
                  )}
                </div>
                {isOpen && <div style={accordionStyle.textLayout}>{text}</div>}
              </div>
            );
          })}
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
    </div>
  );
}
