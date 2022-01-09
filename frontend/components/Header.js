import headerStyles from "../styles/Header.module.css";

const Header = ({ image }) => {
  return (
    <div
      className={headerStyles.header}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default Header;
