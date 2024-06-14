import React, { useState } from "react";
import QuizAppdetail from "@/app/utilities/QuizAppInfo";
import { Button, Grid } from "@mui/material";
export default function QuizHome() {
  const quizHomeStyle = {
    header: {
      textAlign: "center",
      borderBottom: "1px solid red",
    },
    ulRemoveBullet: {
      listStyleType: "none",
    },
    previousNextBtn: {
      display: "flex",
      flexDirection: "row" as "row",
      justifyContent: "space-around",
    },
  };

  const [questionList, setQuestionList] = useState(QuizAppdetail);

  const [questionId, setQuestionId] = useState(1);
  const [isAnswered, setisAnswered] = useState(false);
  const handleClick = (para: string) => {
    if (para == "Next") {
      setQuestionId((prev) => prev + 1);
      setisAnswered(false);
    } else {
      setQuestionId((prev) => prev - 1);
      setisAnswered(false);
    }
  };

  const handleonAnswerClick = (answerIndex: number, question: any) => {
    answerIndex;
    question;
    setisAnswered(true);
  };
  return (
    <div>
      <div style={quizHomeStyle.header as React.CSSProperties}>
        <h1>Quiz Application</h1>
      </div>
      <Grid container xs={12}>
        <Grid xs={4}></Grid>
        <Grid xs={4}>
          {" "}
          <>
            {" "}
            <div>
              {questionList.map((el, index) => {
                const { id, question, options, correctOption } = el;

                return (
                  <>
                    {" "}
                    {id == questionId && (
                      <div key={id}>
                        {id}) <h3 style={{ display: "inline" }}>{question}</h3>
                        <div>
                          {options.map((items, index) => {
                            return (
                              <ul
                                key={items}
                                style={quizHomeStyle.ulRemoveBullet}
                              >
                                <li>
                                  <Button
                                    variant={
                                      isAnswered ? "contained" : "outlined"
                                    }
                                    color={
                                      isAnswered
                                        ? index === correctOption
                                          ? "success"
                                          : "error"
                                        : "inherit"
                                    }
                                    onClick={() =>
                                      handleonAnswerClick(index, el)
                                    }
                                    size="large"
                                  >
                                    {index + 1}) {items}
                                  </Button>
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            <div style={quizHomeStyle.previousNextBtn}>
              <div>
                <Button
                  variant="contained"
                  disabled={questionId == 1}
                  onClick={() => handleClick("Previous")}
                >
                  Previous
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  disabled={questionId == 5}
                  onClick={() => handleClick("Next")}
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        </Grid>
        <Grid xs={4}></Grid>
      </Grid>
    </div>
  );
}
