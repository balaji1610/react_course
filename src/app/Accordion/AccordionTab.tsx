import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface AccordionTabPropsType {
  value: number;
  handleChange: (e: any, index: number) => void;
}

export default function AccordionTab({
  value,
  handleChange,
}: AccordionTabPropsType) {
  const tabsStyle = {
    display: "inline-flex",
    backgroundColor: "#4f46e5",
    color: "#ffffff",
  };
  return (
    <div style={tabsStyle}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
      >
        <Tab label="Add" />
        <Tab label="Accordion" />
      </Tabs>
    </div>
  );
}
