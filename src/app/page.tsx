"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { ApplicationProvider } from "@/app/Context/FoodOrderContext";
import FoodOrderHomePage from "@/app/FoodOrder/FoodOrderHomePage";
import NavigationPage from "@/app/Navigation/NavigationPage";
import Counter from "@/app/Counter/Counter";
import Flashcards from "@/app/FlashCards/Flashcards";
import AccordionHome from "./Accordion/AccordionHome";
import Dropdown from "./Dropdown";
export default function Home() {
  return (
    <div>
      <ApplicationProvider>
        {/* <FoodOrderHomePage /> */}
        {/* <NavigationPage /> */}
        {/* <Counter/> */}
        {/* <Flashcards /> */}
        {/* <AccordionHome /> */}
        <Dropdown />
      </ApplicationProvider>
    </div>
  );
}
