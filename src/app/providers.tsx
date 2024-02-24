"use client";
import { NextUIProvider } from "@nextui-org/react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  <NextUIProvider>{children}</NextUIProvider>;
};
export default Providers;
