import { useEffect, useState } from "react";
import headerStyles from "../styles/Header.module.css";

const Header = ({ images }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((oldActive) =>
        oldActive < images.length - 1 ? oldActive + 1 : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className={headerStyles.header}>
      {images.map((image, i) => (
        <div
          key={image.id}
          className={
            i === active
              ? headerStyles.image + " " + headerStyles.active
              : headerStyles.image
          }
          style={{ backgroundImage: `url(${image.image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Header;
