import Header from "../components/Header";
import Projects from "../components/Projects";

import styles from "../styles/Home.module.css";

export default function Home() {
  const images = [
    {
      id: 1,
      image: "/header2.jpg",
    },
    {
      id: 2,
      image: "/header3.jpg",
    },
  ];
  return (
    <div className={styles.home}>
      {/* <div className={styles.logo}></div> */}
      <Header image={"/header3.jpg"} images={images} />
      <h1>Mjesto gdje snovi postaju stvarnost</h1>
      <Projects />
    </div>
  );
}
