import React, { Component } from "react";
import styles from "./category.module.css";

class Category extends Component {
  handleCategoryClick = (categoryName) => {
    this.props.onCategoryClick(categoryName);
  };

  render() {
    console.log(this.props.currentCat, "cat");
    return (
      <div className={styles.cat}>
        {this.props.category?.map((item) => (
            <p className={this.props.currentCat === item ? styles.catVal : ""} onClick={() => this.handleCategoryClick(item)}>
              {item}
            </p>
        ))}
      </div>
    );
  }
}

export default Category;
// export default withRouter(NewsList);
