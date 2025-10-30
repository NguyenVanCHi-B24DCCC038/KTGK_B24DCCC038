import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Blog Management
      </h1>

      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : ""
          }
        >
          Trang chủ
        </NavLink>

        <button
          onClick={() => navigate("/create")}
          className="bg-white text-blue-600 px-3 py-1 rounded"
        >
          Viết bài
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

