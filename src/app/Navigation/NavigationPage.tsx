import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
export default function NavigationPage() {
  const [step, setStep] = useState(1);
  const navigationStyle = {
    navigationLayout: {
      height: "20rem",
      border: " 1px solid rgb(0 0 0 / 0.1)",
      backgroundColor: "rgb(0 0 0 / 9%)",
    },
    pagesLayout: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-around",
      height: "4rem",
      alignItems: "center",
    },
    stepContentLayout: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "center",
      height: "10rem",
      alignItems: "center",
    },
    previousNextLayout: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-around",
    },
  };

  const previousClick = () => {
    if (step >= 1) {
      setStep((prev) => prev - 1);
    }
  };
  const nextClick = () => {
    if (step <= 3) {
      setStep((prev) => prev + 1);
    }
  };

  const stepsContent = ["STEP 01", "STEP 02", "STEP 03"];
  return (
    <div>
      <Grid
        container
        direction="row"
        height="25px"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div style={navigationStyle.navigationLayout}>
            <div style={navigationStyle.pagesLayout}>
              <div>
                {" "}
                <Avatar
                  sx={{
                    bgcolor: `${step >= 1 && "#1769aa"}`,
                    width: 24,
                    height: 24,
                  }}
                >
                  1
                </Avatar>
              </div>
              <div>
                {" "}
                <Avatar
                  sx={{
                    bgcolor: `${step >= 2 && "#1769aa"}`,
                    width: 24,
                    height: 24,
                  }}
                >
                  2
                </Avatar>
              </div>
              <div>
                {" "}
                <Avatar
                  sx={{
                    bgcolor: `${step >= 3 && "#1769aa"}`,
                    width: 24,
                    height: 24,
                  }}
                >
                  3
                </Avatar>
              </div>
            </div>
            <div style={navigationStyle.stepContentLayout}>
              {stepsContent[step - 1]}
            </div>
            <div style={navigationStyle.previousNextLayout}>
              <Button
                variant="contained"
                color="primary"
                onClick={previousClick}
                disabled={step == 1}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={nextClick}
                disabled={step == 3}
              >
                Next
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
