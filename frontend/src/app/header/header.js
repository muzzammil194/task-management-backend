"use client";
import React,{useEffect,useState } from "react";

import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import profilePic from "@/assets/images/logo.png";

export default function Header() {
  const [isOpen,setIsOpen] = useState(false);
  const [hasLogined,setHasLogined] = useState(false);
  const [usertocken,setUsertocken] = useState("");

  function logout() {
    window.localStorage.userid = "";
    window.localStorage.usertocken = "";
    window.localStorage.userNickName = "";
    setHasLogined(false);
  }

  function debounce( func,delay ) {
    let timerId;
    return function ( ...args ) {
      if ( timerId ) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func.apply(this,args);
      },delay);
    };
  }
  // 当页面宽度发生变化的时候，前往新的页面
  const toNewPage = debounce(() => {
    const offsetWidth = window.document.documentElement.offsetWidth;
    if ( offsetWidth >= 800 && window.location.href.indexOf('3031') < 0 ) { // 排除本地开发环境
      window.location.href = `${window.location.href.replace(/m\./g,'www.')}`
    }
  },1000)

  const setRem = async () => {
    await require("lib-flexible");
    toNewPage()
    window.addEventListener('resize',toNewPage)
  };
  const menuToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // console.log(window.localStorage.usertocken);
    // 判断是否已经登陆
    if ( window && window.localStorage.userid != undefined && window.localStorage.userid != "" ) {
      setHasLogined(true);
    }
    // setRem();
    // window.addEventListener("resize", setRem);
    if ( window?.localStorage.usertocken ) {
      setUsertocken(window.localStorage.usertocken);
    }
  },[]);

  return (
    <div id="header" className={ style.mobileheader }>
      <div className={ style.logo }>
        <Link href={ `/` } target="_blank">
          <Image src={ profilePic } alt=""/>
        </Link>
      </div>
      <svg t="1582853770784" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" pId="6589" width="30" height="30" onClick={ () => menuToggle() }>
        <path
          d="M512 986.156522c-267.130435 0-483.06087-215.930435-483.06087-483.06087S244.869565 22.26087 512 22.26087c264.904348 0 483.06087 215.930435 483.06087 483.06087S776.904348 986.156522 512 986.156522zM512 66.782609C271.582609 66.782609 73.46087 262.678261 73.46087 505.321739c0 240.417391 195.895652 436.313043 438.53913 436.313043 240.417391 0 438.53913-195.895652 438.53913-438.53913C950.53913 262.678261 752.417391 66.782609 512 66.782609zM763.547826 527.582609 260.452174 527.582609c-13.356522 0-22.26087-8.904348-22.26087-22.26087s8.904348-22.26087 22.26087-22.26087l503.095652 0c13.356522 0 22.26087 8.904348 22.26087 22.26087S774.678261 527.582609 763.547826 527.582609zM512 776.904348c-13.356522 0-22.26087-8.904348-22.26087-22.26087L489.73913 253.773913c0-13.356522 8.904348-22.26087 22.26087-22.26087 13.356522 0 22.26087 8.904348 22.26087 22.26087l0 503.095652C534.26087 768 525.356522 776.904348 512 776.904348z"
          p-id="6590"
          fill="#ffffff"
        ></path>
      </svg>

      { usertocken ? (
        <div className={ [`${ style.menulist }`,"headerMenubox"].join(" ") } style={ isOpen == true ? {display: "flex"} : {display: "none"} }>
          <Link href={ `/profile` } className={ style.menu } onClick={ () => menuToggle() }>
            <span>{ window.localStorage.userNickName }</span>
          </Link>

          <Link href={ `/user/login` } className={ style.menu } onClick={ () => logout() }>
            <span>sign out</span>
          </Link>

          <Link href={ `/donate` } className={ style.menu }>
            <span>Donate AMT</span>
          </Link>

          <Link href={ `/searchpage` } className={ style.menu }>
            <span>search news</span>
          </Link>

          <Link href={ `/addNews` } className={ style.menu }>
            <span>add news</span>
          </Link>
        </div>
      ) : (
        <div className={ [`${ style.menulist }`,"headerMenubox"].join(" ") } style={ isOpen ? {display: "flex"} : {display: "none"} }>
          <Link href={ `/user/login` } className={ style.menu } onClick={ () => menuToggle() }>
            <span>sign in</span>
          </Link>
          <Link href={ `/user/login` } className={ style.menu } onClick={ () => menuToggle() }>
            <span>sign up</span>
          </Link>

          <Link href={ `/donate` } className={ style.menu }>
            <span>Donate AMT</span>
          </Link>

          <Link href={ `/searchpage` } className={ style.menu }>
            <span>search news</span>
          </Link>
          <Link href={ `/addNews` } className={ style.menu }>
            <span>add news</span>
          </Link>
        </div>
      ) }
    </div>
  );
}
