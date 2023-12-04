import burguerMenu from "../../assets/images/icon-menu.svg";
const NavBar = () => {
  return (
    <>
      <ul
        className="bg-blue-400 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center"
      >
        <li>
          <a href="#"></a>Home
        </li>
        <li>
          <a href="#"></a>New
        </li>
        <li>
          <a href="#"></a>Popular
        </li>
        <li>
          <a href="#"></a>Trending
        </li>
        <li>
          <a href="#"></a>Categories
        </li>
      </ul>
      <img
        className="w-10 h-4 cursor-pointer sm:hidden"
        src={burguerMenu}
        alt=" Menu De Hamburguesa"
      />
    </>
  );
};

export default NavBar;
