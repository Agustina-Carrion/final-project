import {Disclosure} from "@headlessui/react";

function MobileHamburgerMenuItems () {
    return (
        <Disclosure.Panel className="md:hidden">
        <div className="space-y-1 pt-2 pb-3">
          <Disclosure.Button
            as="a"
            href="#"
            className="block border-l-4 border-cyan-400 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
          >
            Home
          </Disclosure.Button>
          <Disclosure.Button
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
          >
            Team
          </Disclosure.Button>
        </div>
      </Disclosure.Panel>
    )
}

export default MobileHamburgerMenuItems;
