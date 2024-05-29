import { Grid } from "@mui/material";
import { FlashcardType } from "@/app/Interface/FlashcardType";
import { useState } from "react";
import Typography from "@mui/material/Typography";
export default function QuestionListsMenu({ menu }: any) {
  const [hoverCard, setHoverCard] = useState(-1);

  const QuestionListsStyle = {
    cardLayout: {
      border: "1px solid rgb(0 0 0 / 20%)",
      height: "14rem",
      width: "21rem",
      borderRadius: "19px",
      margin: "30px",
    },
    align: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "center",
      height: "9rem",
      alignItems: "center",
      margin: "27px",
    },
  };

  const mouseEnter = (para: number) => {
    setHoverCard(para);
  };

  const mouseLeave = (para: number) => {
    setHoverCard(para);
  };

  return (
    <div>
      <Grid container direction="row" xs={12}>
        <>
          {menu.map((item: FlashcardType, index: number) => {
            return (
              <div
                key={index}
                style={{
                  border: "1px solid rgb(0 0 0 / 20%)",
                  height: "14rem",
                  width: "21rem",
                  borderRadius: "19px",
                  margin: "10px 40px 10px 40px",
                  cursor: "pointer",
                  color: hoverCard == item.id ? "#ffffff" : "",
                  backgroundColor:
                    hoverCard == item.id ? "rgb(0 0 0 / 38%)" : "",
                }}
                onMouseEnter={() => mouseEnter(item.id)}
                onMouseLeave={() => mouseLeave(-1)}
              >
                <div style={QuestionListsStyle.align}>
                  {hoverCard != item.id ? (
                    <div>
                      {" "}
                      <Typography variant="h6">{item.question}</Typography>
                    </div>
                  ) : (
                    <div>{item.answer}</div>
                  )}
                </div>
              </div>
            );
          })}
        </>
      </Grid>
    </div>
  );
}
