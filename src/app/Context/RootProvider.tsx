import { ApplicationProvider } from "@/app/Context/FoodOrderContext";
import React from "react";
interface RootProviderPropsType {
  children: React.ReactNode;
}

export default function RootProvider({ children }: RootProviderPropsType) {
  return (
    <>
      <ApplicationProvider>{children}</ApplicationProvider>
    </>
  );
}
