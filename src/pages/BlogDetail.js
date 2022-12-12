import { NavBar, Footer, MapContainer } from "../componentExports";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "wouter";

function BlogDetail({ id, destinations }) {
  return (
    <>
      <NavBar />
      <main className="m-14">
      <Link href={ "/home" }>
      <button
        type="button"
        className="relative inline-flex items-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-5"
      >
        <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        <span>Back</span>
      </button>
      </Link>
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight mb-10">
              {destinations[id]?.title}
            </h2>
          </div>
          <div className="p-4">
            <div className="flex py-2">
              <img
                src={ destinations[id]?.authorImage }
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="Author"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">
                  { destinations[id]?.author }
                </p>
                <p className="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
          </div>
          <img
            src={destinations[id].image}
            className="w-full object-cover lg:rounded"
            alt="Destination"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">
            { destinations[id]?.description }
            </p>

            <p className="pb-6">
            { destinations[id]?.description }
            </p>
            <div className="relative inline-flex items-center"> 
                <MapPinIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
              { destinations[id]?.location }
            </div>
          </div>
          <div className="inline-flex min-w-max md:min-w-0 w-full lg:w-1/2 m-auto mt-12 max-w-screen-sm">
            <MapContainer />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default BlogDetail;
