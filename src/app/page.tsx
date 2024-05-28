"use client";
import Image from "next/image";
import styles from "./page.module.css";
// import FoodOrderHomePage from "@/app/FoodOrder/FoodOrderHomePage";
import { ApplicationProvider } from "@/app/Context/FoodOrderContext";
import NavigationPage from "@/app/Navigation/NavigationPage";
import Counter from "@/app/Counter/Counter"
export default function Home() {
  return (
    <div>
      <ApplicationProvider>
        {/* <FoodOrderHomePage /> */}
        {/* <NavigationPage /> */}
        <Counter/>
      </ApplicationProvider>
    </div>
  );
}
