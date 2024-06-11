import { ApplicationProvider } from "@/app/Context/FoodOrderContext";
import { SplitBillProvider } from "@/app/Context/SplitBillContext";
import React from "react";
interface RootProviderPropsType {
  children: React.ReactNode;
}

export default function RootProvider({ children }: RootProviderPropsType) {
  return (
    <>
      <ApplicationProvider>
        <SplitBillProvider> {children}</SplitBillProvider>
      </ApplicationProvider>
    </>
  );
}
