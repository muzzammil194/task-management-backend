"use client";
import React, { Component, useState } from "react";
import style from "./content.module.scss";
import Newslist from "./newsList/news";
import "antd-mobile/dist/antd-mobile.css";
import Category from "./category/category";
import pic from "../../assets/images/logo.png";
import { getNews } from "@/axios/api";
class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ["News", "Opinion", "Legal", "Health", "Faith", "Women", "Youth", "Life", "Culture"],
      news: [],
      currentCat: "News",
      limit: 3,
    };
  }

  componentDidMount() {
    this.fetchNews(this.state.currentCat);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentCat !== this.state.currentCat) {
      this.fetchNews(this.state.currentCat);
    }
  }

  handleCategoryClick = (categoryName) => {
    this.setState({ currentCat: categoryName }, () => {
      console.log("Selected Category:", this.state.currentCat);
    });
  };

  fetchNews = async (currentCat) => {
    try {
      const response = await getNews(currentCat);
      this.setState({ news: [...response, ...response] });
      console.log(response, "news");
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  loadMore = () => {
    this.setState((prevState) => ({
      limit: prevState.limit + 3,
    }));
  };
  render() {
    return (
      <div className={style.content} id="contentModule">
        <Category category={this.state.category} currentCat={this.state.currentCat} onCategoryClick={this.handleCategoryClick} />
        <Newslist news={this.state.news} limit={this.state.limit} />
        <button className={style.btn} onClick={this.loadMore}>
            Click me to load more news
          </button>
      </div>
    );
  }
}

export default Content;
