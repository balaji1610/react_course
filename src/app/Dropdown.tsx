import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Select from "@mui/material/Select";
import FoodOrderHomePage from "@/app/FoodOrder/FoodOrderHomePage";
import NavigationPage from "@/app/Navigation/NavigationPage";
import Counter from "@/app/Counter/Counter";
import Flashcards from "@/app/FlashCards/Flashcards";
import AccordionHome from "./Accordion/AccordionHome";
import TravelList from "@/app/TravelList/TravelList";
import TextExpander from "@/app/TextExpander/TextExpander";
import SplitBill from "@/app/SplitBill/SpiltBill";
import CurrencyConvert from "@/app/CurrencyConverter/CurrencyConvert";
import QuizHome from "@/app/QuizApp/QuizHome";
export default function Dropdown() {
  const [value, setvalue] = useState("QuizApp");
  const InutTopicsOptions = [
    {
      label: "FoodOrderHomePage",
      value: "FoodOrderHomePage",
    },

    {
      label: "Flashcards",
      value: "Flashcards",
    },

    {
      label: "AccordionHome",
      value: "AccordionHome",
    },
    {
      label: "NavigationPage",
      value: "NavigationPage",
    },
    {
      label: "Counter",
      value: "Counter",
    },
    {
      label: "TravelList",
      value: "TravelList",
    },
    {
      label: "TextExpander",
      value: "TextExpander",
    },
    {
      label: "Profile",
      value: "Profile",
    },
    {
      label: "CurrencyConvert",
      value: "CurrencyConvert",
    },
    {
      label: "QuizApp",
      value: "QuizApp",
    },
  ];
  const handleChange = (event: any) => {
    setvalue(event.target.value);
  };
  const findComponents: any = {
    FoodOrderHomePage: <FoodOrderHomePage />,
    NavigationPage: <NavigationPage />,
    Counter: <Counter />,
    Flashcards: <Flashcards />,
    AccordionHome: <AccordionHome />,
    TravelList: <TravelList />,
    TextExpander: <TextExpander />,
    Profile: <SplitBill />,
    CurrencyConvert: <CurrencyConvert />,
    QuizApp: <QuizHome />,
  };
  return (
    <div>
      <Select value={value} onChange={handleChange}>
        {InutTopicsOptions.map((el, index) => {
          return (
            <MenuItem key={index} value={el.value}>
              {el.label}
            </MenuItem>
          );
        })}
      </Select>

      <div>{findComponents[value]}</div>
    </div>
  );
}
