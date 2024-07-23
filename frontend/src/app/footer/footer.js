"use client";
import React, { Component } from "react";
import style from "./footer.module.scss";

class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        <p>Copyright © AMT Inc. All rights reserved 2024.</p>
      </div>
    );
  }
}

export default Footer;
