import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Map from "./Map.js";

function Body() {
  return (
    <div className="relative bg-gray-800">
      <div className="relative max-w-full min-h-screen px-4 py-8 sm:px-6 lg:px-8 lg:py-0">
        <div className="md:ml-0 md:w-1/2 md:px-8 md:py-16 sm:px-6 sm:py-12">
          <h2 className="text-lg font-semibold text-gray-300">
            Award winning support
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We’re here to help
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 mb-5"
              >
                Visit the help center
                <ArrowTopRightOnSquareIcon
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="md:absolute md:top-0 md:right-0 md:w-1/2">
        <Map  />
        </div>
      
      </div>
    
    </div>
  );
}

export default Body;
