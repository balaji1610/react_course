import { TextExpanderType } from "@/app/Interface/TextExpander";
import { Grid } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
interface TextListProps {
  allTextLists: TextExpanderType[];
}

export default function TextList({ allTextLists }: TextListProps) {
  const [show, setShow] = useState(-1);
  const isEligbleWords = (text: string) => {
    const CountWords = text.split(" ")?.length;
    return CountWords >= 10;
  };

  const showLess = (text: string) => {
    return text.split(" ").slice(0, 10).join(" ");
  };

  const ShowClick = (currentNumber: number) => {
    setShow(currentNumber);
  };
  return (
    <div>
      <Grid container xs={12}>
        <Grid xs={3}></Grid>
        <Grid xs={6}>
          {allTextLists.map((el, index) => {
            return (
              <div
                key={index}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  height: " auto",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  width: "50rem",
                  padding: "5px",
                  lineHeight: "25px",
                }}
              >
                <span>
                  {show != index && isEligbleWords(el.text) ? (
                    <>
                      {showLess(el.text)}...{" "}
                      <Button
                        variant="contained"
                        onClick={() => ShowClick(index)}
                        color="primary"
                        size="small"
                      >
                        Show More
                      </Button>
                    </>
                  ) : (
                    <>
                      {el.text}&nbsp; &nbsp;
                      {show == index && isEligbleWords(el.text) && (
                        <Button
                          variant="contained"
                          onClick={() => ShowClick(-1)}
                          color="error"
                          size="small"
                        >
                          Show Less
                        </Button>
                      )}
                    </>
                  )}
                </span>
              </div>
            );
          })}
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
    </div>
  );
}
