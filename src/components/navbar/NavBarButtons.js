import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";

function NavBarButtons() {
  return (
    <div className="flex-shrink-0 space-x-4">
      <button
        type="button"
        className="relative inline-flex items-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        <span>New Post</span>
      </button>
      <button
        type="button"
        className="relative inline-flex items-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <ArrowRightIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        <span>LogIn</span>
      </button>
    </div>
  );
}
export default NavBarButtons;
