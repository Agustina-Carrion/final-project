import { NavBar, Footer, MapContainer, BlogCard } from "../componentExports";
import gif from "../assets/Lost -The Weeknd.gif";

function HomePage({ error, destinations }) {
  return (
    <>
      <NavBar />

      <div className="h-full lg:relative bg-rose-500 dark:bg-slate-900 grid md:grid-cols-2 justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
        <div className="grid grid-cols-2 md:ml-0 md:w-full md:px-0 md:py-16 sm:px-6 sm:py-12">
          {error ? (
            <>
              <h1 className="text-white text-2xl text-center">
                Error when retrieving data. We're trying to find out what
                happened...
              </h1>
              <img className="px-5" src={gif} alt="The Weekend.gif." />
            </>
          ) : (
            destinations
              ?.sort((itemA, itemB) => itemB.date.localeCompare(itemA.date))
              .map((item, i) => (
                <BlogCard
                  key={item.title}
                  id={i}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  location={item.location}
                  authorImage={item.authorImage}
                  author={item.author}
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
