import { NavBar, Footer, MapContainer, BlogCard } from "../componentExports";
import gif from "../assets/Lost -The Weeknd.gif";

function HomePage({ error, destinations }) {
  return (
    <>
      <NavBar />

      <div className="h-full lg:relative bg-rose-500 dark:bg-slate-900 grid md:grid-cols-2 justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
        <div className="grid grid-cols-2 md:ml-0 md:w-full md:px-0 md:py-16 sm:px-6 sm:py-12">
          {error ? (
            <div className="flex flex-col col-span-2 my-24 mx-10">
              <h1 className="text-white text-2xl text-center">
                Error when retrieving data. We're trying to find out what
                happened...
              </h1>
              <img className="py-8" src={gif} alt="The Weekend.gif." />
            </div>
          ) : (
            destinations
              ?.sort((itemA, itemB) => itemB.date.localeCompare(itemA.date))
              .map((destination, i) => (
                <BlogCard
                  key={destination.title}
                  id={i}
                  image={destination.image}
                  title={destination.title}
                  date={destination.date}
                  location={destination.location}
                  authorImage={destination.authorImage}
                  author={destination.author}
                />
              ))
          )}
        </div>
        <div className="w-full sm:h-1/2 lg:h-full sm:my-16 md:my-28 lg:my-40">
          <MapContainer destinations={destinations} />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default HomePage;
