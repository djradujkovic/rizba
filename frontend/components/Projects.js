import projectsStyles from "../styles/Projects.module.css";

import Image from "next/image";

const Projects = () => {
  return (
    <div className={projectsStyles.projects}>
      <div className={projectsStyles.project}>
        <div className={projectsStyles.image}>
          {/* <Image src="/project1.png" layout="fill" /> */}
        </div>
        <div className={projectsStyles.info}>
          <h2>Projekat: Dnevni Boravak - June</h2>
          <h3>Dizajner: Marko Markovic</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            metus eget nunc volutpat accumsan. Nulla facilisi. Proin dui dui,
            vestibulum at interdum eu, iaculis ac ex. Aenean et ante gravida,
            pellentesque felis a, feugiat urna. Nulla ac lacus at nulla
            pellentesque egestas. Sed at rhoncus dolor, sed accumsan quam. Proin
            sit amet pretium erat. In porta metus vel mi ullamcorper aliquet.
            Curabitur volutpat commodo velit vel scelerisque. Suspendisse
            iaculis accumsan sem, in iaculis odio efficitur vitae. Sed vehicula
            cursus lacus id placerat. Duis nibh neque, congue ut rutrum sit
            amet, lobortis nec risus.{" "}
          </p>
        </div>
      </div>
      <div className={projectsStyles.project}>
        <div className={projectsStyles.image}>
          {/* <Image src="/project1.png" layout="fill" /> */}
        </div>
        <div className={projectsStyles.info}>
          <h2>Projekat: Dnevni Boravak - June</h2>
          <h3>Dizajner: Marko Markovic</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            metus eget nunc volutpat accumsan. Nulla facilisi. Proin dui dui,
            vestibulum at interdum eu, iaculis ac ex. Aenean et ante gravida,
            pellentesque felis a, feugiat urna. Nulla ac lacus at nulla
            pellentesque egestas. Sed at rhoncus dolor, sed accumsan quam. Proin
            sit amet pretium erat. In porta metus vel mi ullamcorper aliquet.
            Curabitur volutpat commodo velit vel scelerisque. Suspendisse
            iaculis accumsan sem, in iaculis odio efficitur vitae. Sed vehicula
            cursus lacus id placerat. Duis nibh neque, congue ut rutrum sit
            amet, lobortis nec risus.{" "}
          </p>
        </div>
      </div>
      <div className={projectsStyles.project}>
        <div className={projectsStyles.image}>
          {/* <Image src="/project1.png" layout="fill" /> */}
        </div>
        <div className={projectsStyles.info}>
          <h2>Projekat: Dnevni Boravak - June</h2>
          <h3>Dizajner: Marko Markovic</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            metus eget nunc volutpat accumsan. Nulla facilisi. Proin dui dui,
            vestibulum at interdum eu, iaculis ac ex. Aenean et ante gravida,
            pellentesque felis a, feugiat urna. Nulla ac lacus at nulla
            pellentesque egestas. Sed at rhoncus dolor, sed accumsan quam. Proin
            sit amet pretium erat. In porta metus vel mi ullamcorper aliquet.
            Curabitur volutpat commodo velit vel scelerisque. Suspendisse
            iaculis accumsan sem, in iaculis odio efficitur vitae. Sed vehicula
            cursus lacus id placerat. Duis nibh neque, congue ut rutrum sit
            amet, lobortis nec risus.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
