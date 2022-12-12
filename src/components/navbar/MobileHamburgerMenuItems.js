import { Disclosure } from "@headlessui/react";
import { Link } from "wouter";

function MobileHamburgerMenuItems() {
  return (
    <Disclosure.Panel className="md:hidden">
      <div className="space-y-1 pt-2 pb-3">
        <Link href="/home">
          <Disclosure.Button className="block border-l-4 border-cyan-400 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 py-2 pl-3 pr-4 text-base font-medium text-white sm:pl-5 sm:pr-6 dark:bg-slate-400 dark:border-slate-600 dark:hover:border-gray-300 dark:hover:bg-gray-50 dark:hover:text-gray-700">
            Home
          </Disclosure.Button>
        </Link>
        <Link href="/contact">
          <Disclosure.Button className="block border-l-4 border-cyan-400 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 py-2 pl-3 pr-4 text-base font-medium text-white sm:pl-5 sm:pr-6 dark:bg-slate-400 dark:border-slate-600 dark:hover:border-gray-300 dark:hover:bg-gray-50 dark:hover:text-gray-700">
            Team
          </Disclosure.Button>
        </Link>
      </div>
    </Disclosure.Panel>
  );
}

export default MobileHamburgerMenuItems;
