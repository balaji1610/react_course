import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AccordionType } from "@/app/Interface/AccordionType";
import { useState } from "react";
import AccordionTab from "./AccordionTab";
import AccordionList from "./AccordionList";
export default function AccordionHome() {
  const [value, setValue] = useState(0);
  const accordion = {
    id: 0,
    title: "",
    text: "",
  };
  const [accordionindex, setAccordionIndex] =
    useState<AccordionType>(accordion);
  const [accordionLists, setAccordionLists] = useState<AccordionType[]>([]);

  const handleChange = (e: any, index: number) => {
    setValue(index);
  };

  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    setAccordionIndex((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addClick = () => {
    setAccordionLists((prev) => {
      return [
        ...prev,
        { ...accordionindex, id: Number(accordionLists.length + 1) },
      ];
    });
    setAccordionIndex(accordion);
  };
  const accordionStyle = {
    headerLayout: {
      textAlign: "center",
      borderBottom: "1px solid red",
    },
    mainLayout: {
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "flex-end",
      gap: "20px",
      alignItems: "center",
      height: "16rem",
    },
    tabLayout: {
      textAlign: "center",
      marginTop: "10px",
    },
  };

  return (
    <div>
      <div style={accordionStyle.headerLayout as React.CSSProperties}>
        <AccordionHeader />
      </div>
      <div style={accordionStyle.tabLayout as React.CSSProperties}>
        <AccordionTab value={value} handleChange={handleChange} />
      </div>
      {value == 0 && (
        <div style={accordionStyle.mainLayout}>
          <div>
            {" "}
            <TextField
              label="Title"
              name="title"
              sx={{ width: "20rem" }}
              onChange={handleOnchange}
              value={accordionindex.title}
            />
          </div>
          <div>
            {" "}
            <TextField
              multiline
              label="description"
              name="text"
              rows={3}
              sx={{ width: "30rem" }}
              onChange={handleOnchange}
              value={accordionindex.text}
            />
          </div>
          <div>
            {" "}
            <Button variant="contained" onClick={addClick}>
              ADD
            </Button>
          </div>
        </div>
      )}

      {value == 1 && <AccordionList list={accordionLists} />}
    </div>
  );
}

function AccordionHeader() {
  return (
    <>
      <h1>Accordion</h1>
    </>
  );
}
