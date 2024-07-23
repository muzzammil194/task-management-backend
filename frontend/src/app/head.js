"use client";
import { useEffect } from "react";
import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'

export default function Head() {
  useEffect(() => {
    import("amfe-flexible");
  }, []);
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
