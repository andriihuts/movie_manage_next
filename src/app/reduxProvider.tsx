"use client"; // This marks the file as a Client Component

import { Provider } from "react-redux";
import store from "@/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}