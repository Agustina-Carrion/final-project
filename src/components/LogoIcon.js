function LogoIcon() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img
        className="block h-8 w-auto lg:hidden"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Tina's Final Project"
      />
      <img
        className="hidden h-8 w-auto lg:block"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Tina's Final Project"
      />
    </div>
  );
}
export default LogoIcon;
