import React, { Component } from "react";
import $ from "jquery";
import "animate.css";
import { Button, Tabs, WhiteSpace } from "antd-mobile";
import style2 from "./news.module.scss";
import style from "./news.module.css";
import Link from "next/link";
import { StickyContainer, Sticky } from "react-sticky";
import Image from "next/image";
import pix from "../../../assets/images/logo.png";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className={style.container}>
          <div className={style.main}>
            {this.props?.news
              .map((item) => (
                <div className={style.news}>
                  <div className={style.img}>
                    <Image src={item.image || pix} width={120} height={100} />
                  </div>
                  <div className={style.text}>
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))
              .slice(0, this.props.limit)}
          </div>
        </div>
      </>
    );
  }
}

export default NewsList;
// export default withRouter(NewsList);
