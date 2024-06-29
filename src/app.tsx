import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import "./app.scss";

export default function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched");
  });
  return children;
}
