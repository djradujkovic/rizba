import Header from "../components/Header";
import Projects from "../components/Projects";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <div className={styles.logo}></div> */}
      <Header image={"/header1.png"} />
      <h1>Mjesto gdje snovi postaju stvarnost</h1>
      <Projects />
    </div>
  );
}
