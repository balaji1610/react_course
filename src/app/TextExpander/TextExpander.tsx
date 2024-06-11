import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextList from "@/app/TextExpander/TextList";
import { TextExpanderType } from "@/app/Interface/TextExpander";
import { useState } from "react";
export default function TextExpander() {
  const TextKey = {
    id: 0,
    text: "",
  };
  const [allTextLists, setAllTextLists] = useState<TextExpanderType[]>([]);
  const [singleText, setsingleText] = useState<TextExpanderType>(TextKey);
  const TextExpanderStyle = {
    header: {
      textAlign: "center",
      borderBottom: "1px solid red",
      textTransform: "uppercase",
    },
    textField: {
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "center",
      height: "14rem",
      alignItems: "center",
      rowGap: "32px",
    },
  };
  const handleOnChange = (e: any) => {
    setsingleText((prev) => {
      return { ...prev, text: e.target.value };
    });
  };

  const add = () => {
    setAllTextLists((prev: TextExpanderType[]) => {
      return [...prev, { ...singleText, id: allTextLists.length + 1 }];
    });
    setsingleText(TextKey);
  };
  return (
    <div>
      <div style={TextExpanderStyle.header as React.CSSProperties}>
        <Header />
      </div>
      <div style={TextExpanderStyle.textField}>
        <div>
          {" "}
          <TextField
            multiline
            name="text"
            value={singleText.text}
            rows={4}
            onChange={handleOnChange}
            placeholder="Type Your Text"
            sx={{ width: "30rem" }}
          />
        </div>
        <div>
          <Button variant="contained" onClick={add}>
            Add
          </Button>
        </div>
      </div>

      <div>
        <TextList allTextLists={allTextLists} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <h1>Text Expander</h1>
    </>
  );
}
