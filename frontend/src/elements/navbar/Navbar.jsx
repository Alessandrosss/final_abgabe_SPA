import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import paths from "../../utils/paths";
import { ButtonCompact, ButtonOutlined } from "../buttons";
import Logo from "./Logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" px-8 flex justify-between items-center h-24 w-full lg:w-9/12 md:mx-auto">
      <Logo />

      {/* Navigationsleiste */}
      <ul className="hidden lg:flex flex-row gap-6 uppercase font-semibold">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Web App</li>
        <li className="p-4">Login</li>
        <ButtonCompact value="try for free" path="/login" />
      </ul>

      {/* Hamburger Menü Icon */}
      <div onClick={handleNav} className="block lg:hidden">
        {!isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Sidebar */}
      <div
        className={
          !isOpen
            ? "fixed left-0 top-0 w-3/6 h-full bg-slate-400 p-4 text-center"
            : "fixed left-[-100%]"
        }
      >
        <Logo />

        <ul className="pt-12 uppercase font-semibold flex flex-col lg:hidden w-full gap-5">
          <Link style={{padding: "1rem"}} onClick={() => setIsOpen(!isOpen)} to={paths.Home.path}>
            Home
          </Link>
          <Link style={{padding: "1rem"}} onClick={() => setIsOpen(!isOpen)} to={paths.Blog.path}>
            Blog
          </Link>
          <Link style={{padding: "1rem"}} onClick={() => setIsOpen(!isOpen)} to={paths.Application.path}>
            Application
          </Link>
          <ButtonCompact value="try for free" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
