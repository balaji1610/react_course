import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { FlashcardType } from "@/app/Interface/FlashcardType";
import { useState } from "react";
import Button from "@mui/material/Button";
import QuestionListsMenu from "./QuestionLists";
const flashcardsStyle = {
  headerLayout: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    height: "4rem",
    alignItems: "center",
    borderBottom: "1px solid black",
  },
  mainLayout: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    height: "14rem",
    alignItems: "center",
  },
  answerLayout: {
    marginTop: "10px",
  },
};

function Header() {
  return (
    <div style={flashcardsStyle.headerLayout}>
      <h1>Flash Cards</h1>
    </div>
  );
}
export default function Flashcards() {
  const List = {
    id: 0,
    question: "",
    answer: "",
  };
  const [questionsList, setQuestionList] = useState<FlashcardType>(List);
  const [questionLists, setQuestionLists] = useState<FlashcardType[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "question") {
      if (e.target.value.length <= 45 && e.target.value.length >= 1) {
        setQuestionList((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      }
    } else if (e.target.name == "answer") {
      if (e.target.value.length <= 180 && e.target.value.length >= 1) {
        setQuestionList((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      }
    }
  };

  const prepareQuestionsList = () => {
    const updatedId = {
      ...questionsList,
      id: Number(questionLists.length + 1),
    };
    setQuestionLists((prev) => {
      return [...prev, updatedId];
    });
    setQuestionList(List);
  };
  return (
    <div>
      <Header />
      <div style={flashcardsStyle.mainLayout}>
        {" "}
        <div>
          {" "}
          <TextField
            label="Write Your Question"
            name="question"
            value={questionsList.question}
            sx={{ width: "20rem" }}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <h1>?</h1>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div style={flashcardsStyle.answerLayout}>
          {" "}
          <TextField
            multiline
            name="answer"
            value={questionsList.answer}
            onChange={handleChange}
            rows={3}
            placeholder="Your Answer"
            sx={{ width: "30rem" }}
          />
        </div>
        <div style={flashcardsStyle.answerLayout}>
          {" "}
          <Button variant="contained" onClick={prepareQuestionsList}>
            ADD
          </Button>
        </div>
      </div>
      <QuestionListsMenu menu={questionLists} />
    </div>
  );
}
