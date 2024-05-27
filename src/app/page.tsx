"use client";
import Image from "next/image";
import styles from "./page.module.css";
import FoodOrderHomePage from "@/app/FoodOrder/FoodOrderHomePage";
import { ApplicationProvider } from "@/app/Context/FoodOrderContext";
export default function Home() {
  return (
    <div>
      <ApplicationProvider>
        <FoodOrderHomePage />
      </ApplicationProvider>
    </div>
  );
}
