import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="LOGO" height={29} width={130} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {
          navLinks.map((link) => (
           <li key={link.label}>
            <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray">{link.label}</a>
           </li> 
          ))
        }
        </ul>
        <img src={hamburger} alt="hamburger" width={25} height={25} className="hidden max-lg:block"/>
      </nav>
    </header>
  );
};
export default Nav;
