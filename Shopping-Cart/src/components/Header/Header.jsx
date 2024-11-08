import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold  sm:text2xl md:text-3xl cursor-pointer text-xl tracking-wide active:bg-blue-300 active:text-black">
              React Redux Shopping Cart
            </h1>
          </div>
        </NavLink>
        <ul className=" list-none flex items-center space-x-6 text-gray-800 font-semibold">
          <NavLink to={"/"}>
            <li className="cursor-pointer">Home</li>
          </NavLink>
          <NavLink to={"/cart"}>
            <li className="cursor-pointer">Cart</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
