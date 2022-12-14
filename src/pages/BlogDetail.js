import { NavBar, Footer } from "../componentExports";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "wouter";
import Map, { Marker } from "react-map-gl";
import Pin from "../components/body/Pin";
import "mapbox-gl/dist/mapbox-gl.css";

function BlogDetail({ id, destinations }) {
  const viewport = {
    longitude: destinations[id]?.longitude,
    latitude: destinations[id]?.latitude,
    zoom: 12,
  };

  return (
    <>
      <NavBar />
      <main className="p-14 bg-indigo-500 dark:bg-slate-900">
        <Link href={"/home"}>
          <button
            type="button"
            className="relative inline-flex items-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-5 dark:bg-slate-600 dark:hover:bg-slate-400"
          >
            <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            <span>Back Home</span>
          </button>
        </Link>
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 pt-16 lg:px-0">
            <h2 className="text-5xl font-semibold text-white leading-tight">
              {destinations[id]?.title}
            </h2>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center py-2 px-4">
              <p className="font-semibold text-white text-lg italic">
                Visiting date: {destinations[id]?.date}
              </p>
              <div className="flex items-center">
                <img
                  src={destinations[id]?.authorImage}
                  className="h-14 w-14 rounded-full mr-4 object-cover"
                  alt="Author"
                />
                <p className="font-semibold text-white text-lg">
                  {destinations[id]?.author}
                </p>
              </div>
            </div>
          </div>
          <img
            src={destinations[id].image}
            className="w-full h-1/2 lg:rounded"
            alt="Destination"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-white text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">{destinations[id]?.description}</p>

            <p className="pb-6">{destinations[id]?.description}</p>
            <div className="relative inline-flex items-center">
              <MapPinIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {destinations[id]?.location}
            </div>
          </div>
          <div className="h-full w-full p-12 rounded">
            <Map
              initialViewState={viewport}
              style={{ width: "100%", height: "500px" }}
              mapboxAccessToken={
                "pk.eyJ1IjoiYW5kaXZ3aGl0ZSIsImEiOiJjbGIzeDQ4MmgwNXFmM3JxbnNlaW9neXc0In0.kyEmO_woTD50qizMwbHYmQ"
              }
              mapStyle="mapbox://styles/mapbox/streets-v12"
              cursor="move"
            >
              <Marker
                longitude={destinations[id]?.longitude}
                latitude={destinations[id]?.latitude}
                anchor="bottom"
              >
                <Pin />
              </Marker>
            </Map>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default BlogDetail;
