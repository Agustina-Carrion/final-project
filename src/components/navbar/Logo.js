import logo from "../../assets/Moon-and-Sun-Log.svg";

function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img
        className="block h-28 lg:hidden w-28 mt-2"
        src={logo}
        alt="Final Project"
      />
      <img
        className="hidden h-28 lg:block w-28 mt-2"
        src={logo}
        alt="Final Project"
      />
    </div>
  );
}
export default Logo;
