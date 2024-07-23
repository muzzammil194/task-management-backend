import styles from "./page.module.css";
import Header from "./header/header";
import Content from "./content/content";
import Footer from "./footer/footer";
export default function () {
  return (
    <div className={styles.box}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
