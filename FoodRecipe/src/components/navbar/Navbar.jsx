import { NavLink } from "react-router-dom";
import { GlobalContext } from "./context";
import { useContext } from "react";
const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink className="text-black hover:text-gray-700 duration-300" to={"/"}>
        <h2 className="text-2xl font-semibold">Food Recipe</h2>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-200 focus-shadow-red-400"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            className="text-black hover:text-gray-700 duration-300"
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-black hover:text-gray-700 duration-300"
            to={"/favorites"}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
